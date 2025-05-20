import { FastifyInstance } from "fastify";
import {
  getAllCocktailsHandler,
  getCocktailListHandler,
} from "../../controllers/cocktail.controller.js";

export default async function (app: FastifyInstance) {
  app.get("/cocktails", getAllCocktailsHandler);
  app.get("/cocktail-list", getCocktailListHandler);
}
