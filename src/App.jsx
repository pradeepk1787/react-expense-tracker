import { useState } from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import CategoryFilter from "./components/filters/CategoryFilter";
import SearchBar from "./components/filters/SearchBar";

function App() {
  //Shared States
  const [expenses, setExpenses] = useState([]);

  //Handle CRUD
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <Header />
      <Dashboard expenses={expenses} />
      <SearchBar />
      <CategoryFilter />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
