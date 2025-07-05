import mongoose, { Schema, Document } from 'mongoose';

export interface IProperty extends Document {
  title: string;
  type: 'apartment' | 'house' | 'commercial';
  district: string;
  address: string;
  area: number;
  rooms: number;
  price: number;
  description: string;
  features: string[];
  images: string[];
  isActive: boolean;
  createdAt: Date;
}

const PropertySchema: Schema = new Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['apartment', 'house', 'commercial'], required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  area: { type: Number, required: true },
  rooms: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  images: [{ type: String }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProperty>('Property', PropertySchema);
