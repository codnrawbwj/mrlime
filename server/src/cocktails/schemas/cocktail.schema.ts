import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export const tasetLabelValues = [
  'sweet',
  'fresh',
  'deep',
  'bitter',
  'classic',
] as const;

export type TastelabelType = (typeof tasetLabelValues)[number];

@Schema()
export class Cocktail extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  alcoholPercentage: number;

  @Prop({ required: true })
  tasteReview: string;

  @Prop({ required: true })
  pictureURL: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Ingredient' }], required: true })
  ingredients: Types.ObjectId[];

  @Prop({ type: [String], enum: tasetLabelValues })
  tasteLabel: TastelabelType[];

  @Prop([String])
  recipe: string[];
}

export const CockatilSchema = SchemaFactory.createForClass(Cocktail);
