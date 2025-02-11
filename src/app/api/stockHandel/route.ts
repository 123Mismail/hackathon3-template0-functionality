 


import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }
    
    const { productId, quantity, action } = body;
    
    // Validate required fields
    if (!productId || quantity === undefined || !action) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    console.log("request data is trying to fetch 25 ", body);
  
    // Validate quantity is a number
    if (typeof quantity !== "number" || quantity <= 0) {
      return NextResponse.json(
        { error: "Invalid quantity" },
        { status: 400 }
      );
    }

    // Validate action is either "increase" or "decrease"
    if (action !== "increase" && action !== "decrease") {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      );
    }

    // Fetch the current product using the custom ID
    const query = `*[_type == "product" && id == $productId][0]`;
    const product = await client.fetch(query, { productId });
    console.log("fetching client data from sanity line 45 ", productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Calculate the new stock level
    const currentStock = product.stockLevel || 0; 
    console.log(currentStock, "current stock level of the product ");
    let newStock;
    if (action === "increase") {
      newStock = currentStock + 1;
    } else if (action === "decrease") {
      newStock = currentStock - 1;
    }
    console.log("new stock level is checking ", newStock);

    // Ensure stock level doesn't go below 0
    if (newStock < 0) {
      return NextResponse.json(
        { error: "Insufficient stock" },
        { status: 400 }
      );
    }

    // Update the stock level in Sanity using the document ID
    const updatedProduct = await client
      .patch(product._id) // Use the document ID (_id) for the patch
      .set({ stockLevel: newStock })
      .commit();
    console.log(updatedProduct ,"updated product is showing ");

    return NextResponse.json({
      message: "Stock updated",
      updatedProduct,
    });
  } catch (error: any) {
    console.error("Error updating stock:", error);
    return NextResponse.json(
      { error: "Error updating stock", details: error.message },
      { status: 500 }
    );
  }
}