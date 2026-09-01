import { dashboardCards } from "../../data/dashboardCard";
import formatCurrency from "../../utils/formatCurrency";
import SummaryCard from "./SummaryCard.jsx";
import "./Dashboard.css";

function Dashboard({ expenses }) {
  //Total Expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
  };

  //Highest Expense
  const calculateHighestExpense = () => {
    if (expenses.length === 0) {
      return null;
    }

    return expenses.reduce((highestExpense, expense) => {
      return Math.max(highestExpense, expense.amount);
    }, 0);//Provided initial value 0, because if only one object in array then javascript skips callback function and returns that single element as is
  };

  //Latest Expense
  const calculateLatestExpense = () => {
    if (expenses.length === 0) {
      return null;
    }

    //return latest expense amount
    const latestExpense = expenses.reduce((latest, current) => {
      return new Date(latest.date) > new Date(current.date) ? latest : current;
    },0);

    return latestExpense.amount;
  };

  //Card Value
  const getCardValue = (type) => {
    switch (type) {
      case "totalexpenses":
        return formatCurrency(calculateTotalExpenses());
      case "transactions":
        return expenses.length;
      case "highestexpense":
        const highestExpense = calculateHighestExpense();
        return highestExpense === null ? null : formatCurrency(highestExpense);
      case "latestexpense":
        const latestExpense = calculateLatestExpense();
        return latestExpense === null ? null : formatCurrency(latestExpense);
      default:
        return null;
    }
  };

  return (
    <section className="dashboard">
      <div className="summary-cards">
        {dashboardCards.map((card) => (
          <SummaryCard
            key={card.id}
            title={card.title}
            value={getCardValue(card.type)}
          />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
