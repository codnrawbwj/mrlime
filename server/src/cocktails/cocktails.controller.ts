import { Controller, Get, Param, Post } from '@nestjs/common';
import { cocktail_seed } from 'seed/cocktail_seed';
import { CocktailService } from 'src/cocktails/cocktails.service';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post('insert')
  async insert() {
    return this.cocktailService.insert(cocktail_seed);
  }

  @Get('all')
  async getMenu() {
    return this.cocktailService.getMenu();
  }

  @Get('all_list')
  async getAllList() {
    return this.cocktailService.getAllList();
  }

  @Get(':name')
  async getOne(@Param('name') name: string) {
    return this.cocktailService.getCocktail(name);
  }

  @Get('meta')
  async getCocktailMeta(): Promise<
    { name: string; tasteReview: string; _id: string }[]
  > {
    return this.cocktailService.getMetaList();
  }
}
