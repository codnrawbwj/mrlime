import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CocktailsController } from 'src/cocktails/cocktails.controller';
import { CocktailService } from 'src/cocktails/cocktails.service';
import {
  CockatilSchema,
  Cocktail,
} from 'src/cocktails/schemas/cocktail.schema';
import { IngredientsModule } from 'src/ingredients/ingredients.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cocktail.name, schema: CockatilSchema },
    ]),
    IngredientsModule,
  ],
  controllers: [CocktailsController],
  providers: [CocktailService],
})
export class CocktailsModule {}
