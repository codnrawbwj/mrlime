import express from "express";
import { getAllCocktails } from "../controllers/cocktailController";

const router = express.Router();

router.get("/", getAllCocktails);

export default router;
