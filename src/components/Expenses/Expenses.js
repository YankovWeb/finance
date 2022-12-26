import { useState } from 'react';

import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpensesFilter } from './ExpensesFilter';

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const upLiftYear = (year) => {
    setSelectedYear(year);
  };
  return (
    <div>
      <ExpensesFilter yearUp={upLiftYear} />
      <Card className="expenses">
        {props.items.map((items) => {
          return (
            <ExpenseItem
              key={items.id}
              title={items.title}
              amount={items.amount}
              date={items.date}
            />
          );
        })}
      </Card>
    </div>
  );
};
