
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { v4 as uuidv4 } from "uuid"; // Use ES6 import for uuid

interface IProduct {
  sku: string;
  _id: string;
  name: string;
  price: number;
  quantity: number;
  stocksLevel: number;
  image: string;
  currency: string;
  id: string;
  value: number;
  timestamp: string; // ISO string format for date
  price_data: Record<string, any>; // Assuming dynamic price data
  product_data: Record<string, any>; // Assuming dynamic product data
  formattedValue: string;
  formattedPrice: string;
  _key?: string; // Add _key as an optional property
}

// Define a POST request handler
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON from request body
     console.log(body,"body is trying to ocnsole here ")

    // Destructure customer and order details from the request body
    const {
      totalPrice,
      items,
      customerDetails: {
        email,
        firstName,
        lastName,
        country,
        streetAddress,
        city,
        province,
        zipCode,
        phone,
        companyName,
        additionalInfo,
      },
    } = body;
    console.log( email  ,"email is trying t fetch in liine 49")
    // Check if customer already exists with the given email
    const existingCustomer = await client.fetch(
      `*[_type == "customer" && email == $email][0]`,
      { email } // Pass email as a parameter
    );

    let customerId;

    if (existingCustomer) {
      // Customer already exists, use their ID
      customerId = existingCustomer._id;
       
    } else {
      // If customer does not exist, create a new customer
      const newCustomer = await client.create({
        _type: "customer",
        email,
        firstName,
        lastName,
        country,
        streetAddress,
        city,
        province,
        zipCode,
        phone,
        companyName,
        additionalInfo,
      });

      customerId = newCustomer._id;
       
    }

    // Add _key to each item in the items array
    const productsWithKeys = items.map((item: IProduct) => ({
      ...item,
      _key: uuidv4(), // Generate a unique key for each product
    }));

    // Create the order with a reference to the customer
    const orderID = Math.floor(1000 + Math.random() * 9000);
    const newOrder = await client.create({
      
      _type: "order",
      title: `ORDER-${orderID}`, // Set a custom title (e.g., using a unique order ID)
      customer: {
        _type: "reference",
        _ref: customerId, // Reference the customer ID
      },
      products: productsWithKeys.map((item: IProduct) => ({
        _type: "object", // Ensure each product object has a type
        _key: item._key, // Include the _key property
        productName: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: totalPrice, // Ensure it's a number
      orderDate: new Date().toISOString(), // Store the current date in ISO format
    });

     

    // Return success response
    return NextResponse.json(
      {
        message: "Customer and order data saved successfully!",
        customerId,
        orderId: newOrder._id,
      },
      { status: 201 } // Use 201 for resource creation
    );
  } catch (error) {
    console.error("Error saving customer or order data:", error);
    return NextResponse.json(
      { error: "Failed to save customer or order data" },
      { status: 500 }
    );
  }
}