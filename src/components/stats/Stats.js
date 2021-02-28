import React from "react";

import Cards from "./Card";

import "../../styles/stats.css";

function Stats(props) {
  return (
    <div className="row m-0 stats-sec">
      <div className="col p-0">
        <Cards
          title="Total Records"
          count={props.records}
          fas="fas fa-th-list"
        />
        <Cards
          title="Total Students"
          count={props.studs}
          fas="fas fa-user-graduate"
        />
        <Cards
          title="No of Subjects"
          count={props.subjects}
          fas="fas fa-book-open"
        />
        <Cards
          title="No of Years"
          count={props.years}
          fas="fas fa-calendar-alt"
        />
        <Cards
          title="No of Grades"
          count={props.grades}
          fas="fas fa-chalkboard-teacher"
        />
        <Cards
          title="Sems Per Year"
          count={props.semesters}
          fas="far fa-edit"
        />
      </div>
    </div>
  );
}

export default Stats;
