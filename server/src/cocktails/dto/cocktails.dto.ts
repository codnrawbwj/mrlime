import { TastelabelType } from 'src/cocktails/schemas/cocktail.schema';

export type CocktailInsertDto = {
  name: string;
  alcoholPercentage: number;
  tasteReview: string;
  pictureURL: string;
  ingredients: string[];
  tasteLabel: TastelabelType[];
  recipe: string[];
};
