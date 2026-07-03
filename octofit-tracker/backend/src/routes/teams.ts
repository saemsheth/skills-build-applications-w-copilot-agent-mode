import { Router } from 'express';
import Team from '../models/Team.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTeam = await Team.create(req.body);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create team' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      res.json(team);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!team) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      res.json(team);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTeam = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeam) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      res.json({ message: 'Team deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team' });
  }
});

export default router;
