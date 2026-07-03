import { Schema, model } from 'mongoose';

interface IActivity {
  userId: string;
  type: string;
  duration: number;
  distance?: number;
  calories: number;
  timestamp: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  distance: { type: Number },
  calories: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default model<IActivity>('Activity', activitySchema);
