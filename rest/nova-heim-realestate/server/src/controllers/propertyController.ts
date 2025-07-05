import { Request, Response } from 'express';
import Property from '../models/Property';

// Get all properties
export const getAllProperties = async (req: Request, res: Response) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error });
    }
};

// Get property by ID
export const getPropertyById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching property', error });
    }
};

// Create a new property
export const createProperty = async (req: Request, res: Response) => {
    const newProperty = new Property(req.body);
    try {
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(400).json({ message: 'Error creating property', error });
    }
};

// Update a property
export const updateProperty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: 'Error updating property', error });
    }
};

// Delete a property
export const deleteProperty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting property', error });
    }
};