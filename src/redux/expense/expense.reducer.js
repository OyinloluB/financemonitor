import React from "react";
import expenseUserTypes from "./expense.types";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PortableWifiOffIcon from "@material-ui/icons/PortableWifiOff";
import SettingsIcon from "@material-ui/icons/Settings";
import HouseIcon from "@material-ui/icons/House";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const initialState = {
  expenses: [
    {
      item: "Food",
      icon: <FastfoodIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 0,
    },
    {
      item: "Internet",
      icon: <PortableWifiOffIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 1,
    },
    {
      item: "Repairs",
      icon: <SettingsIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 2,
    },
    {
      item: "Housing",
      icon: <HouseIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 3,
    },
    {
      item: "Electronics",
      icon: <PhoneAndroidIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 4,
    },
    {
      item: "Clothing",
      icon: <AccessibilityIcon style={{ fontSize: 18, color: "grey" }} />,
      date: "",
      amount: 0.00,
      id: 5,
    },
  ],
  loading: false,
  error: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case expenseUserTypes.REGISTER_EXPENSE_START:
      return {
        ...state,
        loading: true,
      };
    case expenseUserTypes.REGISTER_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [...action.payload],
        error: null,
      };
    case expenseUserTypes.REGISTER_EXPENSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
