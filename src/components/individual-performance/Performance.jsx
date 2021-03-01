import React from "react";
import LineChart from "../charts/LineChart";

function Performance(props) {
  return (
    <>
      <div className="row m-0 mb-3 ">
        <div className="col p-0">
          <p
            style={{
              fontSize: 20,
              marginLeft: 5,
              marginBottom: 5,
              textAlign: "center",
              fontWeight: 560,
            }}
          >
            Individual Students Marks
          </p>
          <p className="text-center mb-0">(STUD ID : {props.studId})</p>
        </div>
      </div>
      <div className="row m-0 mb-3 ">
        {props.finalGroupsBySubjects.map((el, i) => (
          <div className="subject-charts-col p-2 cus-border" key={i}>
            <LineChart
              finalGroupsBySubjects={el}
              title={el.subject}
              // color={getRandomColor()}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Performance;
