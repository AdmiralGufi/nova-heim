import { Request, Response } from 'express';
import RequestModel from '../models/Request';

// Create a new request
export const createRequest = async (req: Request, res: Response) => {
    try {
        const newRequest = new RequestModel(req.body);
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (error) {
        res.status(500).json({ message: 'Error creating request', error });
    }
};

// Get all requests
export const getAllRequests = async (req: Request, res: Response) => {
    try {
        const requests = await RequestModel.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requests', error });
    }
};

// Get a specific request by ID
export const getRequestById = async (req: Request, res: Response) => {
    try {
        const request = await RequestModel.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching request', error });
    }
};

// Update a request
export const updateRequest = async (req: Request, res: Response) => {
    try {
        const updatedRequest = await RequestModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: 'Error updating request', error });
    }
};

// Delete a request
export const deleteRequest = async (req: Request, res: Response) => {
    try {
        const deletedRequest = await RequestModel.findByIdAndDelete(req.params.id);
        if (!deletedRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting request', error });
    }
};