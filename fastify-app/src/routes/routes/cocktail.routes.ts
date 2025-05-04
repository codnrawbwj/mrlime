import { FastifyInstance } from "fastify";
import { getAllCocktailsHandler } from "../../controllers/cocktail.controller.js";

export default async function (app: FastifyInstance) {
  app.get("/cocktails", getAllCocktailsHandler);
}
