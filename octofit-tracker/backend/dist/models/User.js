import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: String },
    totalActivities: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});
export default model('User', userSchema);
