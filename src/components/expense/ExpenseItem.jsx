import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const { amount, category, description, date } = expense;

  return (
    <li>
      <div>
        <h3>{description}</h3>
        <p>{category} {formatCurrency(amount)} {formatDate(date)}</p>
        <button onClick={()=> onDelete(expense.id)}>Delete</button>
        <button onClick={()=> onEdit(expense)}>Edit</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
