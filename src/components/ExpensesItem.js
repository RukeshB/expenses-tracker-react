import "./ExpensesItem.css";
import ExpesnesDate from "./ExpensesDate";

function ExpensesItem(props) {
  return (
    <div className="expense-item">
      <ExpesnesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
