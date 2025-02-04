

export default {
    name: "shipment",
    title: "Shipment",
    type: "document",
    fields: [
      {
        name: "shipmentId",
        title: "Shipment ID",
        type: "string",
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
      },
      {
        name: "countryCode",
        title: "Country Code",
        type: "string",
      },
      {
        name: "postalCode",
        title: "Postal Code",
        type: "string",
      },
      {
        name: "shipDate",
        title: "Ship Date",
        type: "datetime",
        initialValue: "2025-02-04T00:00:00Z",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: "2025-02-04T06:11:45.527Z",
      },
      {
        name: "modifiedAt",
        title: "Modified At",
        type: "datetime",
        initialValue: "2025-02-04T06:11:45.517Z",
      },
      {
        name: "shipmentStatus",
        title: "Shipment Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Shipped", value: "shipped" },
            { title: "Delivered", value: "delivered" },
            { title: "Cancelled", value: "cancelled" },
          ],
        },
        initialValue: "pending",
      },
    ],
  };
  