import express from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/users', userController.********* );
userRouter.get('/:id', userController.******** );

export default userRouter;
