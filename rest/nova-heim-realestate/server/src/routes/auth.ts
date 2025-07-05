import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { validateRegistration, validateLogin } from '../middleware/validate';

const router = express.Router();

// Route for user registration
router.post('/register', validateRegistration, registerUser);

// Route for user login
router.post('/login', validateLogin, loginUser);

export default router;