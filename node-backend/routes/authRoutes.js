import express from 'express';
import register from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', register);
// authRouter.post('/login', authController.login);
// authRouter.post('/logout', authController.logout);

export default authRouter;
