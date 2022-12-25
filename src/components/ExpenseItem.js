import React from 'react';
import './ExpenseItem.css';
export const ExpenseItem = ({ props }) => {
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
