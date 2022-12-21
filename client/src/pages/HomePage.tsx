import DefaultLayout from '../layouts/DefaultLayout';

import { formatDate } from '../functions/dateFunctions';

import { useTransactions } from '../hooks/dataHooks';

const HomePage = (): JSX.Element => {
  const { transactions, loading } = useTransactions();

  return (
    <DefaultLayout>
      <h1>Home</h1>
      {loading ? <p>Loading...</p> : null}
      {transactions ? transactions.map(transaction => (
        <div key={transaction.transaction_id}>
          <h3>Transaction</h3>
          <p>{transaction.amount} CZK</p>
          {transaction.receiver ? <p>To: {transaction.receiver}</p> : null}
          {transaction.sender ? <p>From: {transaction.sender}</p> : null}
          <p>{formatDate(transaction.date)}</p>
        </div>
      )) : null}
    </DefaultLayout>
  );
}

export default HomePage;
