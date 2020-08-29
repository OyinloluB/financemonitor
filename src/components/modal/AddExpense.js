import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerExpense } from "../../redux/expense/expense.actions";
import Styles from "./modal.module.css";

const AddExpense = ({ id, setShowModal }) => {
  const [expense, setExpense] = useState({
    date: "",
    amount: 0
  });

  const { date, amount } = expense;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(registerExpense(expense, id));
    setShowModal(false);
  };

  return (
    <div className={Styles.backdrop}>
      <div className={Styles.modal}>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <input type="date" name="date" defaultValue={date} onChange={handleChange} />
          <input
            type="number"
            name="amount"
            defaultValue={amount}
            placeholder="Amount Spent"
            onChange={handleChange}
          />
          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
