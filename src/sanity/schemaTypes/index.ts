import { type SchemaTypeDefinition } from 'sanity'
import products  from './product'
import { Blogs } from './blogsSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,Blogs],
}
