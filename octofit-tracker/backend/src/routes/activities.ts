import { Router } from 'express';
import Activity from '../models/Activity.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newActivity = await Activity.create(req.body);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create activity' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      res.status(404).json({ error: 'Activity not found' });
    } else {
      res.json(activity);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!activity) {
      res.status(404).json({ error: 'Activity not found' });
    } else {
      res.json(activity);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update activity' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    if (!deletedActivity) {
      res.status(404).json({ error: 'Activity not found' });
    } else {
      res.json({ message: 'Activity deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete activity' });
  }
});

export default router;
