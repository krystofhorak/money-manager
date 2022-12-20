export type Transaction = {
  transaction_id: number;
  amount: number;
  receiver: string | null;
  sender: string | null;
  date: string;
};
