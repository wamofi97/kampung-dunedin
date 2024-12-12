import { type SchemaTypeDefinition } from "sanity";
import menu from "./menu";
import review from "./review";
import menuImages from "./menu-images";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menu, review, menuImages],
};
