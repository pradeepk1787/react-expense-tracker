import ExpenseItem from "./ExpenseItem";
import CategoryFilter from "../filters/CategoryFilter";
import { useEffect, useState } from "react";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  //local state
  const [selectedCategory, setSelectedCategory] = useState("");

  //handle category selection
  const onCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };

  //handle filtered expenses
  const filteredExpenses = expenses.filter((expense) => {
    return selectedCategory === "" || expense.category === selectedCategory;
  });

  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={onCategorySelection}
      />
      {expenses.length === 0 ? (
        <p>Expense List is empty. Please add expenses to show list.</p>
      ) : filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected category.</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
              onEdit={onEditExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
