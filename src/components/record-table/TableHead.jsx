import React from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ verticalAlign: "middle" }} width="175">
          Student ID
        </th>
        <th style={{ verticalAlign: "middle" }} width="175">
          Name
        </th>
        <th style={{ verticalAlign: "middle" }} width="175">
          Subject
        </th>
        <th
          className="text-center"
          style={{ verticalAlign: "middle" }}
          width="100"
        >
          Mark
        </th>
        <th
          className="text-center"
          style={{ verticalAlign: "middle" }}
          width="100"
        >
          Grade
        </th>
        <th
          className="text-center"
          style={{ verticalAlign: "middle" }}
          width="100"
        >
          Semester
        </th>
        <th
          className="text-center"
          style={{ verticalAlign: "middle" }}
          width="100"
        >
          Year
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
