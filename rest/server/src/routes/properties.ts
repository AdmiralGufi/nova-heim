import { Router } from 'express';
import Property from '../models/Property';

const router = Router();

// Получить все объекты
router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Получить объект по id
router.get('/:id', async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: 'Not found' });
  res.json(property);
});

// Создать объект (админ)
router.post('/', async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.status(201).json(property);
});

// Обновить объект (админ)
router.put('/:id', async (req, res) => {
  const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!property) return res.status(404).json({ message: 'Not found' });
  res.json(property);
});

// Удалить объект (админ)
router.delete('/:id', async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
