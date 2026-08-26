import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>Expense List is empty. Please add expenses to show list.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDeleteExpense} onEdit={onEditExpense}/>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
