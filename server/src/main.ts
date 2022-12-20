import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

const currentDate: Date = new Date();
const exampleTransactions: any[] = [
  { transaction_id: 0, amount: 20.71, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 1, amount: -6.30, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 2, amount: 47.90, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 3, amount: -62.35, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 4, amount: 205.22, receiver: 'Walmart', date: currentDate.toJSON() },
];

app.get('/transaction', (_, res) => {
  res.send(exampleTransactions);
});

app.listen(port, () => {
  console.log(`[STATUS] Listening on port ${port}...`);
});
