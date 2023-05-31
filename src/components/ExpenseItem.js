import "./ExpenseItem.css";
import Card from "./Shared/Card";
import ExpenseDate from "./ExpenseDate";

function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
