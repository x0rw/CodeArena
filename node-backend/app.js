<<<<<<< HEAD
import express from 'express';
import appconfig from './config/config.js';
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'

const app = express();
app.use(authRouter);
app.use(userRouter);

const PORT = appconfig.port;
=======
import express, { urlencoded } from 'express';
import config from './config/config.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';


const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/auth', userRouter);

>>>>>>> branch_Nodejs

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(config.port, () => {
  console.log("server RUNNING on port : " + config.port);
});

export default app;
