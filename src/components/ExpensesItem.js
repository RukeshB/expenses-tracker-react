import "./ExpensesItem.css"

function ExpensesItem(props) {
  const month = props.date.toLocaleString('default', { month: 'long'});
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-item">
      <div>
        <div>{ month}</div>
        <div>{ props.date.getFullYear() }</div>
        <div>{ day }</div>
      </div>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">Rs { props.amount }</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
