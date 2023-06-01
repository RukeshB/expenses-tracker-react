import Card from "../Shared/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterHandler = (filterData) => {
    setFilteredYear(filterData);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
        <ExpensesList expenses={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expense;
