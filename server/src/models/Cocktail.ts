import mongoose, { Document, Schema, Types } from "mongoose";

export const tasetLabelValues = [
  "sweet",
  "fresh",
  "deep",
  "bitter",
  "classic",
] as const;

export type TastelabelType = (typeof tasetLabelValues)[number];

export interface ICocktail extends Document {
  name: string;
  alcoholPercent: number;
  tasteReview: string;
  pictureURL: string;
  ingredients: Types.ObjectId[];
  tasteLabel: TastelabelType[];
  recipe: string[];
}

const CocktailSchema: Schema = new Schema({
  name: { type: String, required: true },
  alcoholPercent: { type: Number, required: true },
  tasteReview: { type: String, required: true },
  pictureURL: { type: String },
  ingredients: [
    { type: Schema.Types.ObjectId, ref: "Ingredient", required: true },
  ],
  tasteLabel: [{ type: String, enum: tasetLabelValues }],
  recipe: [{ type: String }],
});

export default mongoose.model<ICocktail>("Cocktail", CocktailSchema);
