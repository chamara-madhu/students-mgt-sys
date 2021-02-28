import React from "react";

function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ verticalAlign: "middle" }}>Stud ID</th>
        <th style={{ verticalAlign: "middle" }}>Name</th>
        <th style={{ verticalAlign: "middle" }}>Subject</th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Mark
        </th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Grade
        </th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Semester
        </th>
        <th className="text-center" style={{ verticalAlign: "middle" }}>
          Year
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
