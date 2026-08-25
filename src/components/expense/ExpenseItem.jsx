import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

function ExpenseItem({ expense }) {
  const { amount, category, description, date } = expense;

  return (
    <li>
      <div>
        <h3>{description}</h3>
        <p>{category} {formatCurrency(amount)} {formatDate(date)}</p>
      </div>
    </li>
  );
}

export default ExpenseItem;
