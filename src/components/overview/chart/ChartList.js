import React from "react";
import { useSelector } from "react-redux";
import Styles from "./chart.module.css";

const ChartList = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  return (
    <div className={Styles.chartlist}>
      {expenses.map((expense) => (
        <div className={Styles.chartItem} key={expense.id}>
          <div>
            <p className={Styles.title}>
              {expense.icon} &nbsp; {expense.item}
            </p>
          </div>
          <div>
            <p className={Styles.title}>{expense.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartList;
