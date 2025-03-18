import express from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = express.Router();

/*
userRouter.get('/users', userController.get_users);
userRouter.get('/:id', userController.get_user_id);
userRouter.get('/:username', userController.get_user_username);
userRouter.get('/:id', userController.get_user_id);
userRouter.get('/:id', userController.get_user_id);
*/
export default userRouter;
