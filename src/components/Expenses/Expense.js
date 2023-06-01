import ExpenseItem from "./ExpenseItem";
import Card from "../Shared/Card";
import "./Expense.css"
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expense(props) {
  const expenses = props.expenses;

  const [filteredYear, setFilteredYear] = useState('2023')
  const filterHandler = (filterData) => {
    setFilteredYear(filterData)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={filterHandler}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
