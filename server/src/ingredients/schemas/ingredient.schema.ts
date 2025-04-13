import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type IngredientType =
  | 'juice'
  | 'syrup'
  | 'alcohol'
  | 'garnish'
  | 'carbonated'
  | 'others';

@Schema()
export class Ingredient extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: String, required: true })
  type: IngredientType;

  @Prop()
  imageURL: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  isMainAlcohol: boolean;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
