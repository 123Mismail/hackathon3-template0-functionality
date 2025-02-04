import { NextRequest, NextResponse } from "next/server";
import { shipEngine } from "@/app/helper/shipEngine"; // Replace with the correct import
import { client } from "@/sanity/lib/client";
import { error } from "console";

export async function POST(request: NextRequest) {
  try {
    const { shipAddress  } = await request.json();

    if (!shipAddress  ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const carrierIds = [
      process.env.Stamps_com,
      process.env.UPS,
      process.env.FedEx,
      process.env.DHL_Express_MyDHL_API,
    ].filter(Boolean);

    if (carrierIds.length === 0) {
      return NextResponse.json({ error: "No valid carrier IDs found" }, { status: 400 });
    }

    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipAddress,
        shipFrom: {
          name: "Muhammad Ismail",
          phone: "+923483144255",
          addressLine1: "Address1",
          addressLine2: "Address2",
          stateProvince: "IL",
          cityLocality: "Karachi",
          postalCode: "12345",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages:[
          {
             
            weight: {
                value: 1.5,
                unit: 'pound'
            },
            dimensions: {
                unit: "inch",
                length: 0,
                width: 0,
                height: 0
            },
            insuredValue: {
                currency: "usd",
                amount: 0
            },
          }
        ],
      },
      rateOptions: {
        carrierIds: carrierIds as [],
      },
    });

    console.log("Shipment details:", shipmentDetails);
    if(shipmentDetails !== undefined ){
      try {
           const shipmentDetail = await client.create({
              _type:'shipment',
              shipmentId:shipmentDetails.shipmentId,
              name:shipmentDetails.shipTo?.name,
              phone:shipmentDetails.shipTo?.phone,
              countryCode:shipmentDetails.shipTo?.countryCode,
              postalCode:shipmentDetails.shipTo?.postalCode,
              shipDate:shipmentDetails.createdAt,
              createdAt:shipmentDetails.createdAt,
              modifiedAt:shipmentDetails.modifiedAt,
              shipmentStatus:shipmentDetails.shipmentStatus,
           })
           if(shipmentDetail){
            return NextResponse.json({message:"data successfully inserted to sanity ",
                data:shipmentDetail,
                status:"201"
            })
           }else{
            return NextResponse.json({error:"failed to create shipment detail in sanity  ",
             
              status:"401"
          })
           }
      } catch (error) {
         console.log(error ,"error creating shipping details in sanity ")
         return NextResponse.json({error :" failed to create shipment in sanity "})
      }
    }

    return NextResponse.json(shipmentDetails, { status: 200 });
  } catch (error) {
    console.error("Error creating shipment:", error);
    return NextResponse.json({ error: "Failed to create shipping ID" }, { status: 400 });
  }
}