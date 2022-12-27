import { useState } from 'react';
import { ExpensesList } from './ExpensesList';

import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpensesFilter } from './ExpensesFilter';

import { ExpensesChart } from './ExpensesChart';

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const fiteredHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} yearUp={fiteredHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
