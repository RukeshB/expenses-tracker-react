import "./ExpensesItem.css"

function ExpensesItem() {
  return (
    <div className="expense-item">
      <div>Jan 1st 2023</div>
      <div className="expense-item__description">
        <h2>Going Out with friends</h2>
        <div className="expense-item__price">Rs 1000</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
