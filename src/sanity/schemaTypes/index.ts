import { type SchemaTypeDefinition } from 'sanity'
import products  from './product'
import { Blogs } from './blogsSchema'
import order from './order'
import customer from './customer'
import shippingDetailsSchema from './shippingDetailsSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,Blogs ,order,customer,shippingDetailsSchema],
}
