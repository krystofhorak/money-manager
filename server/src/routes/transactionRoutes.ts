import { Router } from 'express';

const transactionRouter = Router();
const currentDate: Date = new Date();

const exampleTransactions: any[] = [
  { transaction_id: 0, amount: 20.71, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 1, amount: -6.30, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 2, amount: 47.90, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 3, amount: -62.35, receiver: 'Walmart', date: currentDate.toJSON() },
  { transaction_id: 4, amount: 205.22, receiver: 'Walmart', date: currentDate.toJSON() },
];

transactionRouter.get('/', (_, res) => {
  res.send(exampleTransactions);
});

export default transactionRouter;
