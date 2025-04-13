import { Controller, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ingredient_seed } from 'seed/ingredient_seed';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post('insert')
  async insert() {
    return this.ingredientsService.insert(ingredient_seed);
  }
}
