import { CocktailModel } from "../models/cocktail.model.js";

export async function getAllCocktails() {
  return await CocktailModel.find().lean();
}

export async function getCocktailList() {
  return await CocktailModel.find()
    .select("_id name tasteReview tasteLabel")
    .lean();
}
