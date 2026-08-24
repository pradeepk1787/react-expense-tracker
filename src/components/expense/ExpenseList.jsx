import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>Expense List is empty. Please add expenses to show list.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense}/>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
