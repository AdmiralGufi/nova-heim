import express from 'express';
import { getAllProperties, getPropertyById, createProperty, updateProperty, deleteProperty } from '../controllers/propertyController';

const router = express.Router();

// Route to get all properties
router.get('/', getAllProperties);

// Route to get a property by ID
router.get('/:id', getPropertyById);

// Route to create a new property
router.post('/', createProperty);

// Route to update a property by ID
router.put('/:id', updateProperty);

// Route to delete a property by ID
router.delete('/:id', deleteProperty);

export default router;