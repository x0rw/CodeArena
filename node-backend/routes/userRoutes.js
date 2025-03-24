import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

// userRouter.get('/users/admin', userController.users);
// userRouter.get('/admin', userController.admin);

userRouter.get('/:id', userController.userById);
userRouter.get('/dashboard', userController.dashboard)
userRouter.get('/register', userController.register);
userRouter.get('/login', userController.login);
userRouter.get('/logout', userController.logout);

export default userRouter;
