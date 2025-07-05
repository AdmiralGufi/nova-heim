import { Router } from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController';
import { validateRegistration, validateLogin, validateProfileUpdate } from '../middleware/validate';
import { authenticate } from '../middleware/auth';

const router = Router();

// Register a new user
router.post('/register', validateRegistration, registerUser);

// Login a user
router.post('/login', validateLogin, loginUser);

// Get user profile
router.get('/profile', authenticate, getUserProfile);

// Update user profile
router.put('/profile', authenticate, validateProfileUpdate, updateUserProfile);

export default router;