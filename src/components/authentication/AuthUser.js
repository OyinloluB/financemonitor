import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import Styles from "./auth.module.css";
import AuthImage from "../../assets/auth/petertarkaillustration.png";

const AuthUser = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/overview");
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.blankSide}>
        <div>
          <img src={AuthImage} className={Styles.authImage} alt="Peter Tarka" />
        </div>
        <p
          style={{
            textAlign: "center",
            width: "180px",
            fontSize: "14px",
            color: "rgb(132 115 69)",
          }}
        >
          Keep Track of Your Daily Expenses. & Save. Maybe...
        </p>
      </div>
      <div className={Styles.formContainer}>
        <form>
          <h4 className={Styles.pageTitle}>Sign up to Expenseracker</h4>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputField}
              placeholder="First Name"
              type="text"
            />
            <input
              className={Styles.inputField}
              placeholder="Last Name"
              type="text"
            />
          </div>
          <input
            className={Styles.inputField}
            placeholder="Email"
            type="email"
          />
          <br />
          <input
            className={Styles.inputField}
            placeholder="Password"
            text="password"
            style={{ marginBottom: "15px" }}
          />
          <div className={Styles.buttonContainer}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={Styles.button}
              onClick={handleClick}
            >
              Sign Up
            </Button>
            <p
              style={{
                fontSize: "12px",
                display: "flex",
                alignContent: "center",
                cursor: "pointer",
              }}
            >
              View Source Code &nbsp; <GitHubIcon style={{ fontSize: 18 }} />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthUser;
