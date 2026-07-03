import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true },
    duration: { type: Number, required: true },
    targetMuscles: [String],
    createdAt: { type: Date, default: Date.now },
});
export default model('Workout', workoutSchema);
