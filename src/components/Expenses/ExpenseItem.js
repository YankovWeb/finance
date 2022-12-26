import React, { useState } from 'react';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';
export const ExpenseItem = (props) => {
  const [useTitle, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Upadated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{useTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
