"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
// Получить всех пользователей (админ)
router.get('/', async (req, res) => {
    const users = await User_1.default.find();
    res.json(users);
});
// Получить пользователя по id
router.get('/:id', async (req, res) => {
    const user = await User_1.default.findById(req.params.id);
    if (!user)
        return res.status(404).json({ message: 'Not found' });
    res.json(user);
});
// Обновить пользователя
router.put('/:id', async (req, res) => {
    const user = await User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user)
        return res.status(404).json({ message: 'Not found' });
    res.json(user);
});
// Удалить пользователя (админ)
router.delete('/:id', async (req, res) => {
    await User_1.default.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
exports.default = router;
