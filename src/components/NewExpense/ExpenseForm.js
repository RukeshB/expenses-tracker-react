import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [input, setInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  //   })

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // use this when an state is depend on prev state
    // setInput( (prevState) => {
    //     return{...prevState, title: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const clearInput = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    clearInput();
    props.onFromSubmit(expenseData);
  };

  return (
    <form onSubmit={submitHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="1.00"
          step="1"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2024-01-01"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
