import React from "react";
import Navbar from "../navbar/Navbar";

function AdminLayout(props) {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="row m-0">{props.children}</div>
    </div>
  );
}

export default AdminLayout;
