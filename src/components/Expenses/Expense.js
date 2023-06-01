import ExpenseItem from "./ExpenseItem";
import Card from "../Shared/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterHandler = (filterData) => {
    setFilteredYear(filterData);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let content = <h2>No expenses found for year {filteredYear}</h2>;

  if (filteredExpense.length > 0) {
    content = filteredExpense.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
      {content}
    </Card>
  );
}

export default Expense;
