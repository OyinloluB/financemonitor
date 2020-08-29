import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import Styles from "./nav.module.css";

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={Styles.container}>
      <div className={Styles.pageTitle}>
        <h4>Overview</h4>
      </div>
      <div className={Styles.user}>
        <div
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          <Avatar
            alt={user.firstname}
            src="/static/images/avatar/1.jpg"
            style={{
              width: "28px",
              height: "28px",
              fontSize: "14px",
              textTransform: "lowercase",
            }}
          />
          <p>&nbsp; {user.firstname}</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
