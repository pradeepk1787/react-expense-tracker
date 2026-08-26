import { useState } from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import CategoryFilter from "./components/filters/CategoryFilter";
import SearchBar from "./components/filters/SearchBar";

function App() {
  //Shared State
  const [expenses, setExpenses] = useState([]);

  //local state for app
  const [editingExpense, setEditingExpense] = useState(null);

  //Handle CRUD
  const handleSubmitExpense = (expense) => {
    //Edit
    if (editingExpense != null) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((currExpense) => {
          return currExpense.id === expense.id ? expense : currExpense;
        })
      );

      //reset editing expenses
      setEditingExpense(null);
    }
    //Add
    else {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
    }
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
  };

  return (
    <div>
      <Header />
      <Dashboard expenses={expenses} />
      <SearchBar />
      <CategoryFilter />
      <ExpenseForm
        onSubmitExpense={handleSubmitExpense}
        editingExpense={editingExpense}
        onCancelEdit={handleCancelEdit}
      />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
    </div>
  );
}

export default App;
