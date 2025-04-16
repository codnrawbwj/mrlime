import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CocktailInsertDto } from 'src/cocktails/dto/cocktails.dto';
import { Cocktail } from 'src/cocktails/schemas/cocktail.schema';
import { Ingredient } from 'src/ingredients/schemas/ingredient.schema';

@Injectable()
export class CocktailService {
  private readonly logger = new Logger(CocktailService.name);

  constructor(
    @InjectModel('Cocktail')
    private readonly cocktailModel: Model<Cocktail & Document>,

    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<Ingredient & Document>,
  ) {}

  async insert(cocktailJson: CocktailInsertDto[]) {
    const existingNames = await this.cocktailModel.find({}, { name: 1 }).lean();
    const exisitngNameSet = new Set(existingNames.map((item) => item.name));

    const allIngredients = await this.ingredientModel
      .find({}, { name: 1 })
      .lean();
    const ingredientMap = new Map<string, any>();
    allIngredients.forEach((ingred) => {
      ingredientMap.set(ingred.name, ingred._id);
    });

    const filteredSeed = cocktailJson
      .filter((item) => !exisitngNameSet.has(item.name))
      .map((cocktail) => ({
        ...cocktail,
        ingredients: cocktail.ingredients
          .map((name: string) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const id = ingredientMap.get(name);
            if (!id)
              this.logger.warn(`⚠️ Ingredient "${name}" not found in DB`);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return id;
          })
          .filter(Boolean),
      }));

    if (filteredSeed.length === 0) {
      this.logger.warn('🟡 Seed skipped: all cocktails already exist.');
      return { message: 'Seed skipped: all cocktails already exist.' };
    }

    const insertSeeds = await this.cocktailModel.insertMany(filteredSeed);
    this.logger.log(`🟢 Seeded ${insertSeeds.length} cocktails.`);
    return {
      message: `Seed completed: ${insertSeeds.length} new cocktails inserted.`,
    };
  }

  async getMenu() {
    const result = await this.cocktailModel.find({});

    return result;
  }

  async getAllList() {
    return await this.cocktailModel.find({}, 'name');
  }

  async getCocktail(cocktailName: string) {
    const formatted = cocktailName
      .split('_')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');

    const result = await this.cocktailModel.find({ name: formatted });
    if (!result) return;

    return result;
  }
}
