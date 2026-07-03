import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: String },
    teamId: { type: String },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now },
});
export default model('Leaderboard', leaderboardSchema);
