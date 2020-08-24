import React from "react";
import Expense from "./Expense";

const ExpensesContainer = ({ showModal, setShowModal }) => {
  return (
    <div>
      <Expense showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ExpensesContainer;
