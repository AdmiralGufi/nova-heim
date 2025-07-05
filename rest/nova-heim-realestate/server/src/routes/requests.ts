import express from 'express';
import { createRequest, getRequests, getRequestById, updateRequest, deleteRequest } from '../controllers/requestController';
import { authenticate } from '../middleware/auth';
import { validateRequest } from '../middleware/validate';

const router = express.Router();

// Route to create a new request
router.post('/', authenticate, validateRequest, createRequest);

// Route to get all requests
router.get('/', authenticate, getRequests);

// Route to get a specific request by ID
router.get('/:id', authenticate, getRequestById);

// Route to update a request
router.put('/:id', authenticate, validateRequest, updateRequest);

// Route to delete a request
router.delete('/:id', authenticate, deleteRequest);

export default router;