import { useState } from "react";
import { categories } from "../../data/categories";

function ExpenseForm({onAddExpense}) {
  //form fields for user input
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  //Handle input change events
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  //handle Action Events
  const handleAddExpense = (e) => {
    e.preventDefault();

    //create Expense object
    const expense = {
        id:crypto.randomUUID(),
        amount:Number(amount),
        category: category,
        description: description,
        date: date
    }

    //Notify to app to add the expense
    onAddExpense(expense);

  };

  return (
    <div>
      <h2>Add Details</h2>
      <form onSubmit={handleAddExpense}>
        <div>
          <input
            type="number"
            placeholder="Please Enter Amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
          <select
            placeholder="Please Select Category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <input
            type="date"
            placeholder="Please Select Date"
            value={date}
            onChange={handleDateChange}
            required
          />

          <input
            type="text"
            placeholder="Please Add Details"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
