import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
export const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      {items.map((items) => {
        return (
          <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        );
      })}
    </div>
  );
};
