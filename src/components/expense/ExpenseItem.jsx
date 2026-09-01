import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import "./ExpenseItem.css";

function ExpenseItem({ expense, onDelete, onEdit }) {
  const { amount, category, description, date } = expense;

  return (
    <li className="expense-item">
      <div className="expense-info">
        <h3>{description}</h3>
        <p>
          {category} · {formatCurrency(amount)} · {formatDate(date)}
        </p>
      </div>
      <div className="expense-actions">
        <button type="button" onClick={() => onEdit(expense)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(expense.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
