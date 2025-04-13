import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum IngredientEnumType {
  JUICE = 'juice',
  SYRUP = 'syrup',
  ALCOHOL = 'alcohol',
  GARNISH = 'garnish',
  CARBONATED = 'carbonated',
  OTHERS = 'others',
}
@Schema()
export class Ingredient {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, enum: IngredientEnumType, required: true })
  type: IngredientEnumType;

  @Prop()
  imageURL?: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  isMainAlcohol?: boolean;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
