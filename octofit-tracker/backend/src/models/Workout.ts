import { Schema, model } from 'mongoose';

interface IWorkout {
  name: string;
  description: string;
  difficulty: string;
  duration: number;
  targetMuscles: string[];
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  targetMuscles: [String],
  createdAt: { type: Date, default: Date.now },
});

export default model<IWorkout>('Workout', workoutSchema);
