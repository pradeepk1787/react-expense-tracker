import formatCurrency from "../../utils/formatCurrency";

function ExpenseItem({ expense }) {
  const { amount, category, description, date } = expense;

  return (
    <li>
      <div>
        <h3>{description}</h3>
        <p>{category} {formatCurrency(amount)} {date}</p>
      </div>
    </li>
  );
}

export default ExpenseItem;
