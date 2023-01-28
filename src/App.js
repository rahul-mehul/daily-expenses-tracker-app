import { useState } from 'react';
import './App.css';
import Expense from './components/Expense';
import NewExpense from './components/NewExpenses/NewExpense';
// import ExpenseItem from './components/ExpenseItem';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 1094.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 7999.49,
    date: new Date(2019, 9, 12)
  },
  {
    id: 'e3',
    title: 'IPhone 14 Pro',
    amount: 29499.67,
    date: new Date(2022, 11, 2),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4999.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Airline-Spicejet ticket',
    amount: 5578.67,
    date: new Date(2023, 0, 26),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
