import { Schema, model } from 'mongoose';

interface ILeaderboard {
  userId?: string;
  teamId?: string;
  score: number;
  rank: number;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  userId: { type: String },
  teamId: { type: String },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ILeaderboard>('Leaderboard', leaderboardSchema);
