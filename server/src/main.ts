import express from 'express';
import cors from 'cors';

import transactionRouter from './routes/transactionRoutes';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

// Routes
app.use('/transaction', transactionRouter);

app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
