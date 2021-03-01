import React from "react";

function ReviewTable(props) {
  return (
    <React.Fragment>
      {props.records.length > 0 ? (
        props.records.map((el, i) => (
          <tr key={i}>
            <td width="175">{el.studId}</td>
            <td width="175" style={{ textTransform: "capitalize" }}>
              {el.studName}
            </td>
            <td width="175">{el.subject}</td>
            <td width="100" align="center">
              {el.mark}
            </td>
            <td width="100" align="center">
              {el.grade}
            </td>
            <td width="100" align="center">
              {el.semester}
            </td>
            <td width="100" align="center">
              {el.year}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7">No Recods</td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default ReviewTable;
