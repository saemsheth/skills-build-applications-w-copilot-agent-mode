import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  teamId?: string;
  totalActivities: number;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  teamId: { type: String },
  totalActivities: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>('User', userSchema);
