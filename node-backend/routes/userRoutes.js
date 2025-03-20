import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

<<<<<<< HEAD
/*
userRouter.get('/users', userController.get_users);
userRouter.get('/:id', userController.get_user_id);
userRouter.get('/:username', userController.get_user_username);
userRouter.get('/:id', userController.get_user_id);
userRouter.get('/:id', userController.get_user_id);
*/
=======
userRouter.get('/users', userController.users);
userRouter.get('/:id', userController.userbyid);
userRouter.get('/dashboard', userController.dashboard)
userRouter.get('/register', userController.register);
userRouter.get('/login', userController.login);
userRouter.get('/logout', userController.logout);

>>>>>>> branch_Nodejs
export default userRouter;
