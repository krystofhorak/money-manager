import { useState, useEffect } from 'react';
import axios from 'axios';

import type { Transaction } from '../../../typings/transactionTypes';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchTransactions = () => {
    setLoading(true);

    axios.get(`${import.meta.env.VITE_API_ENDPOINT}/transaction`)
    .then(({ data }) => setTransactions(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
  }
};
