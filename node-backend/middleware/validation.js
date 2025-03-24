import { body, validationResult } from "express-validator";

const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  next();
};

const validateRegistration = [
  body('username')
    .trim().escape()
    .notEmpty().withMessage('Username is required')
    .isAlphanumeric().withMessage('Username must be alphanumeric')
    .isLength({ min: 3, max: 30 }).withMessage('Username must be 3-30 characters'),

  body('email')
    .trim().escape()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    .matches(/\d/).withMessage('Password must contain at least one number'),

  checkValidationResult
];

const validateLogin = [
  body('email')
    .trim().escape()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required'),

  checkValidationResult
];

const validateUpdate = [
  body('username')
    .optional()
    .trim().escape()
    .isAlphanumeric().withMessage('Username must be alphanumeric')
    .isLength({ min: 3, max: 30 }).withMessage('Username must be 3-30 characters'),

  body('email')
    .optional()
    .trim().escape()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),

  checkValidationResult
];

export default {
  validateLogin,
  validateRegistration,
  validateUpdate
};
