import express from 'express';
import { PORT } from './config/config.js';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send("test done");
})

app.listen(PORT, () => {
  console.log("server RUNNING on port : " + PORT);
});

export default app;
