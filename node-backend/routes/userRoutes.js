import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/users', userController.users);
userRouter.get('/:id', userController.userbyid);
userRouter.get('/dashboard', userController.dashboard)
userRouter.get('/register', userController.register);
userRouter.get('/login', userController.login);
userRouter.get('/logout', userController.logout);

export default userRouter;
