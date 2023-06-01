import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const fromSubmitHandler = (submittedData) => {
    const expenses = {
      ...submittedData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenses);
  };

  const startAdding = () => {
    setIsAdding(true);
  };

  const stopAdding = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={startAdding}>Add Expenses</button>}
      {isAdding && (
        <ExpenseForm onFromSubmit={fromSubmitHandler} onCancel={stopAdding} />
      )}
    </div>
  );
};

export default NewExpense;
