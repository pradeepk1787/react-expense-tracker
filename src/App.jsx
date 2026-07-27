import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import ExpenseForm from "./components/expense/ExpenseForm";
import ExpenseList from "./components/expense/ExpenseList";
import CategoryFilter from "./components/filters/CategoryFilter";
import SearchBar from "./components/filters/SearchBar";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <SearchBar />
      <CategoryFilter />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
