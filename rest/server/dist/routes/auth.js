"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
// Регистрация
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const existing = await User_1.default.findOne({ email });
    if (existing)
        return res.status(400).json({ message: 'Email already exists' });
    const hash = await bcryptjs_1.default.hash(password, 10);
    const user = new User_1.default({ name, email, password: hash });
    await user.save();
    res.status(201).json({ message: 'User registered' });
});
// Логин
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user)
        return res.status(400).json({ message: 'Invalid credentials' });
    const valid = await bcryptjs_1.default.compare(password, user.password);
    if (!valid)
        return res.status(400).json({ message: 'Invalid credentials' });
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});
exports.default = router;
