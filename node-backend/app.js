import express from 'express';
import appconfig from './config/config.js';
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'

const app = express();
app.use(authRouter);
app.use(userRouter);

const PORT = appconfig.port;

app.listen(PORT, () => {
  console.log("server RUNNING on port : " + PORT);
});

export default app;
