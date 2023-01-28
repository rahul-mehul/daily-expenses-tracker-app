import React from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpenses(expenseData)
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler} />}
        </div>

    );
};
