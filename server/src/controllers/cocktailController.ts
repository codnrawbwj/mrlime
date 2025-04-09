import { Request, Response } from "express";
import Cocktail from "../models/Cocktail";

export const getAllCocktails = async (req: Request, res: Response) => {
  try {
    const cocktails = await Cocktail.find().populate("ingredients");
    res.status(200).json(cocktails);
  } catch (e) {
    console.error("Error fetching cocktails:", e);
    res.status(500).json({ message: "Failed to fetch cocktails" });
  }
};
