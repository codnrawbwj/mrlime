import { Controller, Post } from '@nestjs/common';
import { cocktail_seed } from 'seed/cocktail_seed';
import { CocktailService } from 'src/cocktails/cocktails.service';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post('insert')
  async insert() {
    return this.cocktailService.insert(cocktail_seed);
  }
}
