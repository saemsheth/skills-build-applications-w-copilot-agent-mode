import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    distance: { type: Number },
    calories: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});
export default model('Activity', activitySchema);
