// schemas/order.js
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: "title",
        type: "string",
        title: "Order Title",
      },
      {
        name: 'customer',
        type: 'reference',
        title: 'Customer',
        to: [{ type: 'customer' }], // Relationship to the Customer schema
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productName',
                type: 'string',
                title: 'Product Name',
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
              },
              {
                name: 'price',
                type: 'number',
                title: 'Price',
              },
              
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };


 