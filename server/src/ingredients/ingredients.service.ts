import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from 'src/ingredients/schemas/ingredient.schema';
import { Model } from 'mongoose';
import { IngredientInsertDto } from 'src/ingredients/dto/ingredients.dto';

@Injectable()
export class IngredientsService {
  private readonly logger = new Logger(IngredientsService.name);

  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<Ingredient & Document>,
  ) {}

  async insert(ingredientJson: IngredientInsertDto[]) {
    const exisitngNames = await this.ingredientModel
      .find({}, { name: 1 })
      .lean();

    const existingNameSet = new Set(exisitngNames.map((item) => item.name));

    const filteredSeed = ingredientJson.filter(
      (item) => !existingNameSet.has(item.name),
    );

    if (filteredSeed.length === 0) {
      this.logger.warn('🟡 Seed skipped: all ingredients already exist.');
      return { message: 'Seed skipped: all ingredients already exist.' };
    }

    const insertSeeds = await this.ingredientModel.insertMany(filteredSeed);
    this.logger.log(`🟢 Seeded ${insertSeeds.length} ingredients.`);
    return {
      message: `Seed completed: ${insertSeeds.length} new ingredients inserted.`,
    };
  }
}
