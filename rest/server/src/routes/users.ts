import { Router } from 'express';
import User from '../models/User';

const router = Router();

// Получить всех пользователей (админ)
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Получить пользователя по id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
});

// Обновить пользователя
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.json(user);
});

// Удалить пользователя (админ)
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
