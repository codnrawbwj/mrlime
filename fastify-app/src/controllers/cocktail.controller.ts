import { FastifyReply, FastifyRequest } from "fastify";
import {
  getAllCocktails,
  getCocktailList,
} from "../services/cocktail.service.js";

export async function getAllCocktailsHandler(_: any, res: FastifyReply) {
  const cocktails = await getAllCocktails();
  res.send(cocktails);
}

export async function getCocktailListHandler(_: any, res: FastifyReply) {
  const cocktails = await getCocktailList();
  res.send(cocktails);
}
