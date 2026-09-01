import getTodayDate from "../../utils/getTodayDate";
import "./Header.css";
function Header() {
  return (
    <header className="app-header">
      <div className="header-info">
        <h1>Expense Tracker</h1>
        <p>Track and manage your daily expenses.</p>
      </div>
      <div className="header-date">
        <p>{getTodayDate()}</p>
        <span>Today</span>
      </div>
    </header>
  );
}

export default Header;
