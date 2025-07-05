"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Property_1 = __importDefault(require("../models/Property"));
const router = (0, express_1.Router)();
// Получить все объекты
router.get('/', async (req, res) => {
    const properties = await Property_1.default.find();
    res.json(properties);
});
// Получить объект по id
router.get('/:id', async (req, res) => {
    const property = await Property_1.default.findById(req.params.id);
    if (!property)
        return res.status(404).json({ message: 'Not found' });
    res.json(property);
});
// Создать объект (админ)
router.post('/', async (req, res) => {
    const property = new Property_1.default(req.body);
    await property.save();
    res.status(201).json(property);
});
// Обновить объект (админ)
router.put('/:id', async (req, res) => {
    const property = await Property_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!property)
        return res.status(404).json({ message: 'Not found' });
    res.json(property);
});
// Удалить объект (админ)
router.delete('/:id', async (req, res) => {
    await Property_1.default.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
exports.default = router;
