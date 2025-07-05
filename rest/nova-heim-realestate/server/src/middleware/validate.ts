import { body, validationResult } from 'express-validator';

const validateProperty = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('area').isNumeric().withMessage('Area must be a number'),
  body('rooms').isInt({ min: 1 }).withMessage('At least one room is required'),
  body('location').notEmpty().withMessage('Location is required'),
];

const validateRequest = [
  body('userId').notEmpty().withMessage('User ID is required'),
  body('propertyId').notEmpty().withMessage('Property ID is required'),
  body('message').optional().isString().withMessage('Message must be a string'),
];

const validateUser = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateProperty, validateRequest, validateUser, validate };