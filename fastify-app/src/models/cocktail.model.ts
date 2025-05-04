import mongoose, { Schema } from "mongoose";

export const tasteLabelValues = [
  "sweet",
  "fresh",
  "deep",
  "bitter",
  "classic",
] as const;
export type TasteLabelType = (typeof tasteLabelValues)[number];

const CocktailSchema = new Schema(
  {
    name: { type: String, required: true },
    alcoholPercentage: { type: Number, required: true },
    tasteReview: { type: String, required: true },
    pictureUrl: { type: String, requried: true },
    ingredients: [
      { type: Schema.Types.ObjectId, ref: "Ingredient", required: true },
    ],
    tasteLabel: { type: [String], enum: tasteLabelValues, default: [] },
    reciepe: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const CocktailModel = mongoose.model("Cocktails", CocktailSchema);
