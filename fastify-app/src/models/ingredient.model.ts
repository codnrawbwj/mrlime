import mongoose, { Schema } from "mongoose";

export enum IngredientEnumType {
  JUICE = "juice",
  SYRUP = "syrup",
  ALCOHOL = "alcohol",
  GARNISH = "garnish",
  CARBONATED = "carbonated",
  OTHERS = "others",
}

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(IngredientEnumType),
      required: true,
    },
    imageUrl: { type: String },
    description: { type: String, required: true },
    isMainAlcohol: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const IngredientModel = mongoose.model("Ingredients", IngredientSchema);
