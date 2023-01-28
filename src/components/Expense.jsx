import './Expense.css'
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./Chart/ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div className="expenses">
            <ExpensesFilter
                selected={filteredYear} onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart
                expenses={filteredExpenses} />
            <ExpensesList
                items={filteredExpenses} />
        </div>
    )
}
export default Expense;