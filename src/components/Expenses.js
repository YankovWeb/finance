import { ExpenseItem } from './ExpenseItem';
import { Card } from './Card';
import './Expenses.css';
export const Expenses = (props) => {
  return (
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
  );
};
