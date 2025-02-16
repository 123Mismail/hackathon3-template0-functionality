import { type SchemaTypeDefinition } from 'sanity'
import products  from './product'
import { Blogs } from './blogsSchema'
import order from './order'
import customer from './customer'
import shippingDetailsSchema from './shippingDetailsSchema'
import feedBackSchema from './feedBackSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,Blogs ,order,customer,shippingDetailsSchema,feedBackSchema],
}
