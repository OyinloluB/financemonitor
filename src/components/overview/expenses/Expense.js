import React, { useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./expense.module.css";
import AddExpense from "../../modal/AddExpense";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import PortableWifiOffIcon from "@material-ui/icons/PortableWifiOff";
import SettingsIcon from "@material-ui/icons/Settings";
import HouseIcon from "@material-ui/icons/House";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const Expense = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const handleModal = (id) => {
    console.log(id);
    setId(id);
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
                  {expense.item === "Food" ? (
                    <FastfoodIcon style={{ fontSize: 18, color: "grey" }} />
                  ) : expense.item === "Internet" ? (
                    <PortableWifiOffIcon
                      style={{ fontSize: 18, color: "grey" }}
                    />
                  ) : expense.item === "Repairs" ? (
                    <SettingsIcon style={{ fontSize: 18, color: "grey" }} />
                  ) : expense.item === "Housing" ? (
                    <HouseIcon style={{ fontSize: 18, color: "grey" }} />
                  ) : expense.item === "Electronics" ? (
                    <PhoneAndroidIcon style={{ fontSize: 18, color: "grey" }} />
                  ) : expense.item === "Clothing" ? (
                    <AccessibilityIcon
                      style={{ fontSize: 18, color: "grey" }}
                    />
                  ) : null}
                  &nbsp;{expense.item}
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
          </div>
        ))}
        {showModal && <AddExpense id={id} setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default Expense;
