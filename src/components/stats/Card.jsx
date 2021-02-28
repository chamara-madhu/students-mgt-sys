import React from "react";

function Card(props) {
  return (
    <div className="stat-card">
      <div className="row m-0">
        <div className="col-4 p-0">
          <i className={props.fas}></i>
        </div>
        <div className="col-8 p-0">
          <p className="count">{props.count}</p>
          <p className="stat-name">{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
