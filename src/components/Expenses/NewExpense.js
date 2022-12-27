import React, { useState } from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = ({ onExpenseCreation }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    onExpenseCreation(expenseData);
  };

  const [formOpen, setFormOpen] = useState(false);

  const switchButton = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="new-expense">
      {formOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          switchView={switchButton}
        />
      ) : (
        <button onClick={switchButton}>Add Expense</button>
      )}
    </div>
  );
};
