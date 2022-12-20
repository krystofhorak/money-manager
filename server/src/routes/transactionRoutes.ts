import { Router } from 'express';

import { pool } from '../main';

const transactionRouter = Router();

transactionRouter.get('/', async (_, res) => {
  try {
    const transactions = await pool.query('SELECT * FROM transactions');
    res.json(transactions?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.json("Error!").status(500);    
  }
});

transactionRouter.post('/', async (req, res) => {
  try {
    const { amount, receiver = null, sender = null, date } = req.body;
    const newTransaction = await pool.query('INSERT INTO Transactions (amount, receiver, sender, date) VALUES ($1, $2, $3, $4) RETURNING *', [
      amount,
      receiver,
      sender,
      date,
    ]);
    res.json(newTransaction?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.json("Error!").status(500);  
  }
});

export default transactionRouter;
