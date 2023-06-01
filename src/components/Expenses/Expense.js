import ExpenseItem from "./ExpenseItem";
import Card from "../Shared/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expense(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState("2023");
  const filterHandler = (filterData) => {
    setFilteredYear(filterData);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expense;
