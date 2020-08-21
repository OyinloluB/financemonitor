import React from "react";
import { useSelector } from "react-redux";
import Styles from "./expense.module.css";

const Expense = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  return (
    <div className={Styles.expenseContainer}>
      {expenses.map((expense) => (
        <div className={Styles.expenseItem} key={expense.id}>
          <div>
            <p className={Styles.title}>
              {expense.icon} &nbsp; {expense.item}
            </p>
          </div>
          <div className={Styles.amount}>
            <p>
              <span className={Styles.currency}>&#8358;</span>
              &nbsp;
              {expense.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
