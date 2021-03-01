import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import TableHead from "./TableHead";
import ReviewTable from "./ReviewTable";
import Boxplot from "../charts/Boxplot";
import Column from "../charts/Column";

function Records(props) {
  return (
    <div
      className="row mt-5 mb-4"
      style={{ marginLeft: "0.5%", marginRight: "0.5%" }}
    >
      <div className="col-table px-3 py-2 cus-border">
        <p className="table-heading">Student Marks Table</p>
        <p className="record-results">
          {props.filterBySubject.length > 0
            ? `Showing ${props.indexOfFirst + 1} - ${
                props.indexOfFirst + props.currentItems.length
              } of ${props.filterBySubject.length} records`
            : "No Records."}
        </p>

        <table
          className="table common-table review-table table-responsive border"
          style={{ marginBottom: 0 }}
        >
          <TableHead />
          <tbody style={{ fontSize: 14 }}>
            <ReviewTable records={props.currentItems} />
          </tbody>
        </table>
        {props.noOfPages > 1 && (
          <div className="pagination-div">
            <Pagination
              count={props.noOfPages}
              page={props.page}
              onChange={props.handlePagination}
              className="pagi"
            />
          </div>
        )}
      </div>
      <div className="charts-col">
        <div className="row m-0">
          <div className="col p-2 bg-white cus-border">
            <p className="table-heading">Student Marks for Subject(s)</p>
            <Boxplot filterBySubject={props.filterBySubject} />
          </div>
        </div>
        <div className="row m-0 my-3 ">
          <div className="col p-2 bg-white cus-border">
            <p className="table-heading">
              Student Marks for each Subject with Average
            </p>
            <Column
              filterBySubject={props.filterBySubject}
              records={props.records}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
