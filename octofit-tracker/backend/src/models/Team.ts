import { Schema, model } from 'mongoose';

interface ITeam {
  name: string;
  description?: string;
  memberCount: number;
  totalScore: number;
  createdAt: Date;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  memberCount: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<ITeam>('Team', teamSchema);
