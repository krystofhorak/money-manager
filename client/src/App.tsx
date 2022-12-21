import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AddTransactionPage from './pages/AddTransactionPage';

const App = (): JSX.Element =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTransactionPage />} />
    </Routes>
  );

export default App;
