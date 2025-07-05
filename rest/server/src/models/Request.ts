import mongoose, { Schema, Document } from 'mongoose';

export interface IRequest extends Document {
  user: mongoose.Types.ObjectId;
  property: mongoose.Types.ObjectId;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

const RequestSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  property: { type: Schema.Types.ObjectId, ref: 'Property', required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IRequest>('Request', RequestSchema);
