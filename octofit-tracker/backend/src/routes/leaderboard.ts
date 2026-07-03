import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const standings = await Leaderboard.find().sort({ rank: 1 });
    res.json(standings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

router.get('/teams', async (_req, res) => {
  try {
    const teams = await Leaderboard.find({ teamId: { $exists: true } }).sort({ rank: 1 });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team leaderboard' });
  }
});

router.get('/users', async (_req, res) => {
  try {
    const users = await Leaderboard.find({ userId: { $exists: true } }).sort({ rank: 1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user leaderboard' });
  }
});

export default router;
