import mongoose, { Document, Schema } from "mongoose";

type IngredientType =
  | "juice"
  | "syrup"
  | "alcohol"
  | "garnish"
  | "carbonated"
  | "others";

enum UnitType {
  Ml = "ml",
  Oz = "oz",
  Tsp = "tsp",
  Tbsp = "tbsp",
  Dash = "dash",
  Drop = "drop",
  Slice = "slice",
  Piece = "piece",
  Leaf = "leaf",
  Cube = "cube",
  Whole = "whole",
  Part = "part",
}

export interface IIngredient extends Document {
  name: string;
  type: IngredientType;
  abv: number;
  unit: UnitType[];
  image?: string;
  description: string;
  isMainAlcohol?: boolean;
}

const IngredientSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  abv: { type: Number, required: true },
  unit: [{ type: String, enum: Object.values(UnitType), required: true }],
  image: { type: String },
  description: { type: String },
  isMainAlcohol: { type: Boolean },
});

export default mongoose.model<IIngredient>("Ingredient", IngredientSchema);
