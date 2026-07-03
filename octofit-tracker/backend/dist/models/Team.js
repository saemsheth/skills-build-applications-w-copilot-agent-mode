import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    memberCount: { type: Number, default: 0 },
    totalScore: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
export default model('Team', teamSchema);
