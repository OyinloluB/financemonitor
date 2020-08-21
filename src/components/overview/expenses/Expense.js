import React from "react";
import Styles from "./expense.module.css";

const Expense = () => {
  return (
    <div className={Styles.expenseContainer}>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
      <div className={Styles.expenseItem}>
        <div className={Styles.title}></div>
        <div className={Styles.amount}>
          <span className={Styles.currency}></span>
        </div>
      </div>
    </div>
  );
};

export default Expense;
