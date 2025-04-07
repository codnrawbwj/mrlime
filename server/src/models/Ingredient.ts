import mongoose, { Document, Schema } from "mongoose";

type IngredientType =
  | "juice"
  | "syrup"
  | "alcohol"
  | "garnish"
  | "carbonated"
  | "others";

export const UnitValues = [
  "ml",
  "oz",
  "tsp",
  "tbsp",
  "dash",
  "drop",
  "slice",
  "piece",
  "leaf",
  "cube",
  "whole",
  "part",
] as const;

export type UnitValuesType = (typeof UnitValues)[number];

export interface IIngredient extends Document {
  name: string;
  type: IngredientType;
  abv: number;
  unit: UnitValuesType[];
  image?: string;
  description: string;
  isMainAlcohol?: boolean;
}

const IngredientSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  abv: { type: Number, required: true },
  unit: [{ type: String, required: true }],
  image: { type: String },
  description: { type: String },
  isMainAlcohol: { type: Boolean },
});

export default mongoose.model<IIngredient>("Ingredient", IngredientSchema);
