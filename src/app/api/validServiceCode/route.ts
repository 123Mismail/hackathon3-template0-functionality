


import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const carrier_id = "se-1856685"; // Example: FedEx (Change if needed)
    const response = await fetch(
      `https://api.shipengine.com/v1/carriers/${carrier_id}/services`,
      {
        headers: {
          'API-Key': process.env.NEXT_PUBLIC_SHIP_ENGINE_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service codes: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Service Codes Response:", data);

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching service codes:", error.message);
    return NextResponse.json(
      { error: "Failed to retrieve service codes" },
      { status: 500 }
    );
  }
}
