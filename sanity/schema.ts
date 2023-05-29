import { type SchemaTypeDefinition } from 'sanity'
import {product} from "./documents/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
