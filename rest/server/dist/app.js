"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const properties_1 = __importDefault(require("./routes/properties"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const requests_1 = __importDefault(require("./routes/requests"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/properties', properties_1.default);
app.use('/api/users', users_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/requests', requests_1.default);
app.get('/', (req, res) => {
    res.send('Nova Heim Real Estate API');
});
exports.default = app;
