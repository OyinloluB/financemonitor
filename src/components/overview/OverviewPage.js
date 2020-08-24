import React from "react";
import Navigation from "./topnav/Navigation";
import SideNav from "./sidenav/SideNav";
import Styles from "./overview.module.css";
import ExpensesContainer from "./expenses/ExpensesContainer";
import Chart from "./chart/Chart";

const OverviewPage = () => {
  return (
    <>
      <div className={Styles.overviewContainer}>
        <div className={Styles.container}>
          <div className={Styles.sidenav}>
            <SideNav />
          </div>
          <div className={Styles.overviewMain}>
            <Navigation />
            <ExpensesContainer />
            <div>
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
