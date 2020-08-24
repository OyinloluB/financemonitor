import React, { useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./expense.module.css";
import AddExpense from "../../modal/AddExpense";

const Expense = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const [showModal, setShowModal] = useState(false);

  const handleModal = (id) => {
    console.log(id);
    setShowModal(true);
  };

  return (
    <>
      <div className={Styles.expenseContainer}>
        {expenses.map((expense) => (
          <div key={expense.id}>
            <div
              className={Styles.expenseItem}
              onClick={() => handleModal(expense.id)}
            >
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
                {showModal && (
                  <AddExpense id={expense.id} setShowModal={setShowModal} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Expense;
