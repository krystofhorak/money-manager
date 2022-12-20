CREATE TABLE Transactions(
  transaction_id SERIAL PRIMARY KEY,
  amount NUMERIC(6, 2) NOT NULL,
  receiver VARCHAR(128),
  sender VARCHAR(128),
  date TIMESTAMP
);
