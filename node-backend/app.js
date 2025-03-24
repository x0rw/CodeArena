// copied code  
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error('Reason:', reason);
  console.error('Promise:', promise);
});

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});
// Done 

import express from 'express';
import config from './config/config.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import errorMiddleware from './middleware/errorMiddleware.js'

const app = express();
//const corsOptions = {
//  origin: '',
//}

app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth', authRouter);
app.use('/api/auth', userRouter);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log("server RUNNING on port : " + config.port);
});

export default app;
