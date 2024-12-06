import { type SchemaTypeDefinition } from "sanity";
import menu from "./menu";
import review from "./review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menu, review],
};
