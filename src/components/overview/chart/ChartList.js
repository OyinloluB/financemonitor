import React from "react";
import { useSelector } from "react-redux";
import Styles from "./chart.module.css";

import { Row, Col } from "react-bootstrap";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import PortableWifiOffIcon from "@material-ui/icons/PortableWifiOff";
import SettingsIcon from "@material-ui/icons/Settings";
import HouseIcon from "@material-ui/icons/House";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const ChartList = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  return (
    <>
      {expenses.map((expense) => (
        <div className={Styles.chartItem} key={expense.id}>
          <div>
            <p className={Styles.title}>
              {expense.item === "Food" ? (
                <FastfoodIcon style={{ fontSize: 18, color: "grey" }} />
              ) : expense.item === "Internet" ? (
                <PortableWifiOffIcon style={{ fontSize: 18, color: "grey" }} />
              ) : expense.item === "Repairs" ? (
                <SettingsIcon style={{ fontSize: 18, color: "grey" }} />
              ) : expense.item === "Housing" ? (
                <HouseIcon style={{ fontSize: 18, color: "grey" }} />
              ) : expense.item === "Electronics" ? (
                <PhoneAndroidIcon style={{ fontSize: 18, color: "grey" }} />
              ) : expense.item === "Clothing" ? (
                <AccessibilityIcon style={{ fontSize: 18, color: "grey" }} />
              ) : null}
              &nbsp; {expense.item}
            </p>
          </div>
          <div>
            <p className={Styles.title}>
              <span className={Styles.currency}>&#8358;</span>
              &nbsp;
              {expense.amount}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChartList;
