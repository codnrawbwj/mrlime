import mongoose, { Document, Schema, Types } from "mongoose";

export interface ICollection extends Document {
  name: string;
  theme: string;
  cocktailList: Types.ObjectId[];
}

const CollectionSchema: Schema = new Schema({
  name: { type: String, required: true },
  theme: { type: String, required: true },
  cocktailList: [
    { type: Schema.Types.ObjectId, ref: "Cocktail", required: true },
  ],
});

export default mongoose.model<ICollection>("Collection", CollectionSchema);
