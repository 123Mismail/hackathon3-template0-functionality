export default {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
    },
    {
      name: 'streetAddress',
      type: 'string',
      title: 'Street Address',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'province',
      type: 'string',
      title: 'Province',
    },
    {
      name: 'zipCode',
      type: 'string',
      title: 'ZIP Code',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'companyName',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'additionalInfo',
      type: 'text',
      title: 'Additional Information',
    },
  ],
};