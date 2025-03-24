import express from 'express';
import authController from '../controllers/authController.js';
import validation from '../middleware/validation.js'

const authRouter = express.Router();

authRouter.post('/register', validation.validateRegistration, authController.register);
authRouter.post('/login', validation.validateLogin, authController.login);

export default authRouter;
