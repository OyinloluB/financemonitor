import React from "react";
import { Avatar } from "@material-ui/core";
import Styles from "./nav.module.css";

const Navigation = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.pageTitle}>
        <h4>Overview</h4>
      </div>
      <div className={Styles.user}>
        <p
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          <Avatar
            alt="Jane Doe"
            src="/static/images/avatar/1.jpg"
            style={{
              width: "28px",
              height: "28px",
              fontSize: "14px",
              textTransform: "lowercase",
            }}
          />
          &nbsp; Jane Doe
        </p>
      </div>
    </div>
  );
};

export default Navigation;
