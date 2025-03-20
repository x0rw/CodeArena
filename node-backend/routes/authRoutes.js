import express from 'express';
<<<<<<< HEAD
import register from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', register);
// authRouter.post('/login', authController.login);
// authRouter.post('/logout', authController.logout);
=======
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
>>>>>>> branch_Nodejs

export default authRouter;
