"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Request_1 = __importDefault(require("../models/Request"));
const router = (0, express_1.Router)();
// Получить все заявки (админ)
router.get('/', async (req, res) => {
    const requests = await Request_1.default.find().populate('user').populate('property');
    res.json(requests);
});
// Создать заявку
router.post('/', async (req, res) => {
    const request = new Request_1.default(req.body);
    await request.save();
    res.status(201).json(request);
});
// Обновить статус заявки (админ)
router.put('/:id', async (req, res) => {
    const request = await Request_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!request)
        return res.status(404).json({ message: 'Not found' });
    res.json(request);
});
exports.default = router;
