import { Router } from 'express';
import Request from '../models/Request';

const router = Router();

// Получить все заявки (админ)
router.get('/', async (req, res) => {
  const requests = await Request.find().populate('user').populate('property');
  res.json(requests);
});

// Создать заявку
router.post('/', async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.status(201).json(request);
});

// Обновить статус заявки (админ)
router.put('/:id', async (req, res) => {
  const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!request) return res.status(404).json({ message: 'Not found' });
  res.json(request);
});

export default router;
