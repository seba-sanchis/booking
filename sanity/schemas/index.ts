import { type SchemaTypeDefinition } from "sanity";

import property from "./property";
import reservation from "./reservation";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [property, reservation],
};
