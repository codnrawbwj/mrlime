import mongoose, { Document, Schema } from "mongoose";

type IngredientType =
  | "juice"
  | "syrup"
  | "alcohol"
  | "garnish"
  | "carbonated"
  | "others";
export interface IIngredient extends Document {
  name: string;
  type: IngredientType;
  image?: string;
  description: string;
  isMainAlcohol?: boolean;
}

const IngredientSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  isMainAlcohol: { type: Boolean },
});

export default mongoose.model<IIngredient>("Ingredient", IngredientSchema);
