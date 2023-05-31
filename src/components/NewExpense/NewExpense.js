import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const fromSubmitHandler = (submittedData) => {
    const expenses = {
      ...submittedData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenses)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFromSubmit={fromSubmitHandler} />
    </div>
  );
};

export default NewExpense;
