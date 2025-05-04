import { CocktailModel } from "../models/cocktail.model.js";

export async function getAllCocktails() {
  return await CocktailModel.find().lean();
}
