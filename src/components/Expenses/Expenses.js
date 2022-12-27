import { useState } from 'react';

import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpensesFilter } from './ExpensesFilter';

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const fiteredHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((items) => (
      <ExpenseItem
        key={items.id}
        title={items.title}
        amount={items.amount}
        date={items.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} yearUp={fiteredHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};
