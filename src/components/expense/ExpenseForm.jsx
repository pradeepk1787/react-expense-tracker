import { useEffect, useState } from "react";
import { categories } from "../../data/categories";
import getTodayDate from "../../utils/getTodayDate";

function ExpenseForm({ onSubmitExpense, editingExpense, onCancelEdit }) {
  //form fields for user input
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(getTodayDate());
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

  const resetForm = () => {
    setAmount("");
    setCategory("");
    setDescription("");
    setDate(getTodayDate());
  };

  //handle Action Events
  const handleSubmitExpense = (e) => {
    e.preventDefault();

    //create Expense object
    let expense = {
      id: editingExpense != null ? editingExpense.id : crypto.randomUUID(),
      amount: Number(amount),
      category: category,
      description: description,
      date: date,
    };

    //Notify to app to add the expense
    onSubmitExpense(expense);

    //Reset the fields
    resetForm();
  };

  //Set local states if form is editing
  useEffect(() => {
    if (editingExpense != null) {
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDescription(editingExpense.description);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  return (
    <div>
      <h2>Add Details</h2>
      <form onSubmit={handleSubmitExpense}>
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
            <option value="" disabled>
              Select Category
            </option>

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
        <button type="submit">{editingExpense != null ? "Update" : "Add"}</button>
        {editingExpense && (
          <button
            onClick={() => {
              resetForm();
              onCancelEdit();
            }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default ExpenseForm;
