
"use client"
import { useState } from 'react';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [carrierCode, setCarrierCode] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!trackingNumber  ) {
      setError('Please enter a tracking number and carrier code.');
      return;
    }

    try {
      const response = await fetch(`/api/tracking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber, carrierCode })
      });
     
    if(response.ok){
      alert("tracking id and carrierCode successfully added posted to router")
    }
      const data =await  response.json()
      console.log(data ,"response from the spi is fetching here ")
      setTrackingInfo(data);

    } catch (err) {
      setError('An error occurred while fetching tracking information.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">ShipEngine Tracking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tracking Number</label>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Carrier Code</label>
          <input
            type="text"
            value={carrierCode}
            onChange={(e) => setCarrierCode(e.target.value)}
            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
           
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Track
        </button>
      </form>
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      {trackingInfo && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-800">Tracking Information</h2>
          <pre className="text-sm text-gray-700 mt-2 overflow-auto">{JSON.stringify(trackingInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  </div>
  );
}