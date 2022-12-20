import { Router } from 'express';

import type { Transaction } from '../../../typings/transactionTypes';

const transactionRouter = Router();
const currentDate: Date = new Date();

const exampleTransactions: Transaction[] = [
  { transaction_id: 0, amount: 20.71, receiver: 'Walmart', sender: '', date: currentDate.toJSON() },
  { transaction_id: 1, amount: -6.30, receiver: 'Walmart', sender: '', date: currentDate.toJSON() },
  { transaction_id: 2, amount: 47.90, receiver: 'Walmart', sender: '', date: currentDate.toJSON() },
  { transaction_id: 3, amount: -62.35, receiver: 'Walmart', sender: '', date: currentDate.toJSON() },
  { transaction_id: 4, amount: 205.22, receiver: 'Walmart', sender: '', date: currentDate.toJSON() },
];

transactionRouter.get('/', (_, res) => {
  res.send(exampleTransactions);
});

transactionRouter.post('/', (req, res) => {
  const { amount, receiver, date } = req.body;
  exampleTransactions.push({
    transaction_id: 0,
    amount,
    receiver,
    sender: '',
    date,
  });
  res.json("Good!");
});

export default transactionRouter;
