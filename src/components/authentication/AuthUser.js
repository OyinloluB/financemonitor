import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/auth.actions";
import GitHubIcon from "@material-ui/icons/GitHub";
import Styles from "./auth.module.css";
import AuthImage from "../../assets/auth/petertarkaillustration.png";

const AuthUser = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { firstname, lastname, email, password } = user;
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    isAuthenticated ? history.push("overview") : history.push("/");
  }, [isAuthenticated, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
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
        <form onSubmit={handleSubmit}>
          <h4 className={Styles.pageTitle}>Sign up to Expenseracker</h4>
          <div className={Styles.inputContainer}>
            <input
              className={Styles.inputField}
              placeholder="First Name"
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            />
            <input
              className={Styles.inputField}
              placeholder="Last Name"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleChange}
            />
          </div>
          <input
            className={Styles.inputField}
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <br />
          <input
            className={Styles.inputField}
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={{ marginBottom: "15px" }}
          />
          <div className={Styles.buttonContainer}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
              className={Styles.button}
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
