


export default {
    name: 'feedback',
     
    type: 'document',
    title: 'Feedback',
    fields: [
      {
        name: 'productId',
        type: 'string',
        title: 'Product ID',
        description: 'The ID of the product this feedback is for',
      },
      {
        name: 'userName',
        type: 'string',
        title: 'User Name',
      },
      
      {
        name: 'feedbackText',
        type: 'text',
        title: 'Feedback',
      },
    ],
  };