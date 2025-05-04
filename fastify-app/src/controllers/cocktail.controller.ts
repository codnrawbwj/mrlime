import { FastifyReply, FastifyRequest } from "fastify";
import { getAllCocktails } from "../services/cocktail.service.js";

export async function getAllCocktailsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  const cocktails = await getAllCocktails();
  res.send(cocktails);
}
