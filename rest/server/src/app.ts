import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db';
import propertyRoutes from './routes/properties';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import requestRoutes from './routes/requests';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);

app.get('/', (req, res) => {
  res.send('Nova Heim Real Estate API');
});

export default app;
