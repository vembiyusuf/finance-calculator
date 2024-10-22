import React, { useState } from 'react';
import AddTransactionForm from './components/AddTransactionForm';
import FinanceReport from './components/FinanceReport';
import ExpenseChart from './components/ExpenseChart';
import TransactionList from './components/TransactionList';
import BudgetAdvice from './components/BudgetAdvice';
import ExportCSV from './components/ExportCSV';
import './App.css'; // Pastikan untuk mengimpor CSS

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="container">
      <h1>Aplikasi Keuangan</h1>
      <AddTransactionForm addTransaction={addTransaction} />
      <FinanceReport transactions={transactions} />
      <BudgetAdvice transactions={transactions} />
      <ExpenseChart transactions={transactions} />
      <TransactionList transactions={transactions} />
      <ExportCSV transactions={transactions} />
    </div>
  );
};

export default App;
