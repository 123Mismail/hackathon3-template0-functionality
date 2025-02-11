


"use client"
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import {format ,parseISO} from "date-fns"
import { useShoppingCart , } from 'use-shopping-cart';
 
interface IShipment {
  shipmentId: string;
  name: string;
  phone: string;
  countryCode: string;
  shipmentStatus: "pending" | "shipped" | "delivered" | "cancelled";
  _updatedAt: string;
  shipDate: string;
}

const SuccessPage = () => {
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [shippingDetails, setDetails] = useState<IShipment>();
const {cartDetails ,clearCart} =useShoppingCart()

 
  
  async function fetchShipmentDetails() {
    try {
      const ShipmentDetails = await client.fetch(
        `*[_type == "shipment"] {
          shipmentId, name, phone, countryCode,
          shipmentStatus, _updatedAt, shipDate
        }`
      );
      return ShipmentDetails;
    } catch (error) {
      console.log(error, "Error fetching data");
    }
  }
  const isCartEmpty = cartDetails && Object.keys(cartDetails).length === 0;
  useEffect(() => {
    async function fetchData() {
      const data = await fetchShipmentDetails();
      if (data !== undefined  ) setDetails(data[0]);
    }
    fetchData();
  }, []);

  const handleDownloadPDF = () => {
    if (!shippingDetails) return;

    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Billing Details", 10, 10);

    // Add shipment details
    doc.setFontSize(12);
    let yOffset = 20;
    const addLine = (label: string, value: string) => {
      doc.text(`${label}: ${value}`, 10, yOffset);
      yOffset += 10;
    };

    addLine("Shipment ID", shippingDetails.shipmentId);
    addLine("Name", shippingDetails.name);
    addLine("Phone", shippingDetails.phone);
    addLine("Country Code", shippingDetails.countryCode);
    addLine("Shipment Status", shippingDetails.shipmentStatus);
    addLine("Updated At", shippingDetails._updatedAt);
    addLine("Ship Date", shippingDetails.shipDate);

    // Save the PDF
    doc.save(`Billing_Details_${shippingDetails.shipmentId}.pdf`);
  };

  const formatDate = (isoDateString:string) => {
    const date = parseISO(isoDateString);
    return format(date, 'MMMM dd, yyyy hh:mm a');
  };


     

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-r from-[#FFF9E5] to-[#FFF9E5]">
      <div className="bg-white p-8 rounded-lg py-4 shadow-2xl text-center transform transition-all hover:scale-100">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful!
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for choosing us! We appreciate your trust.
        </p>

        {/* Button to toggle shipping details */}
        <button
          className="    px-6 py-2 rounded-lg border border-spacing-2 border-[black] hover:ring-2 ring-[#f6d35ef6] duration-300 mb-6"
          onClick={() => {setShowShippingDetails(!showShippingDetails)}}
        >
          {showShippingDetails ? 'Hide Shipping Details' : 'View Shipping Details'}
        </button>

        {/* Shipping Details Grid */}
        {showShippingDetails &&  
        (
          <div className="grid grid-cols-2 gap-4 text-left bg-gray-100 p-4 py-6 rounded-lg">
            <div className="font-semibold">Shipment ID:</div>
            <div>{shippingDetails?.shipmentId}</div>

            <div className="font-semibold">Name Customer:</div>
            <div>{shippingDetails?.name}</div>

            <div className="font-semibold">Country Code:</div>
            <div>{shippingDetails?.countryCode}</div>

            <div className="font-semibold">Modified At:</div>
            <div>{formatDate(shippingDetails?._updatedAt as string)}</div>

            <div className="font-semibold">Shipment Date:</div>
            <div>{formatDate(shippingDetails?.shipDate as string)}</div>

            <div className="font-semibold">Shipment Status:</div>
            <div>{shippingDetails?.shipmentStatus}</div>

            {/* Download PDF Button */}
            <button
              className="col-span-2  hover:ring-2 ring-[#f6d35ef6] duration-300 border border-spacing-2 border-[black] rounded-lg   px-6 py-2     mt-4"
              onClick={handleDownloadPDF}
            >
              Download Billing Details as PDF
            </button>
          </div>
        )
         
      }

        {/* Go to Home Button */}
        <button
          className=" bg-[#efd57f]   px-6 py-3 w-full   transition-colors mt-6"
          onClick={() =>{ (window.location.href = '/') ,clearCart() }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;