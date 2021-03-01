import React from "react";

import "../../styles/filters.css";

function Filters(props) {
  return (
    <div className="row m-0 mb-4">
      <div className="col p-0">
        <div className="form-row filter-row">
          <div className="filter-col">
            <label>Student ID</label>
            <select
              className="form-control"
              name="studId"
              value={props.studId}
              onChange={(e) => props.setStudId(e.target.value)}
            >
              <option defaultValue>-- All --</option>
              {props.studs.map((el, i) => (
                <option
                  value={el.id}
                  key={i}
                  style={{ textTransform: "capitalize" }}
                >
                  {el.id}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>Year</label>
            <select
              className="form-control"
              name="year"
              value={props.year}
              onChange={(e) => props.setYear(e.target.value)}
            >
              <option defaultValue>-- All --</option>
              {props.years.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-col">
            <label>Grade</label>
            <select
              className="form-control"
              name="grade"
              value={props.grade}
              onChange={(e) => props.setGrade(e.target.value)}
            >
              <option defaultValue>-- All --</option>
              {props.grades.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>Subject</label>
            <select
              className="form-control"
              name="subject"
              value={props.subject}
              onChange={(e) => props.setSubject(e.target.value)}
            >
              <option defaultValue>-- All --</option>
              {props.subjects.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <span className="reset-filter-btn" onClick={props.resetFilters}>
            <i className="fas fa-sync-alt"></i> Reset Filters
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filters;
