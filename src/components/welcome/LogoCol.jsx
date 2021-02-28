import React from "react";
import { withRouter } from "react-router-dom";

function LogoCol(props) {
  return (
    <div className="col-12 col-md-6 logo-col">
      <div className="logo-back-div">
        <p className="heading">WELCOME TO</p>
        <p className="sub-heading">Students Management System</p>
        {/* <h1 className="text-white">
          {props.form.studs * props.form.subjects * props.form.semesters * 12}
        </h1> */}
      </div>
    </div>
  );
}

export default withRouter(LogoCol);
