import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import { getStoredExpenses, saveExpenses } from "./utils/storage";
import "./App.css";

function App() {
  //Shared State
  const [expenses, setExpenses] = useState(getStoredExpenses());

  //Store Expenses to local storage
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

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
    <div className="app">
      <div className="app-container">
        <Header />
        <Dashboard expenses={expenses} />
        <main className="main-content">
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
        </main>
      </div>
    </div>
  );
}

export default App;
