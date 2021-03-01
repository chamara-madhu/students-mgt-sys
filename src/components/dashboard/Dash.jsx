import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import Records from "../record-table/Records";
import Performance from "../individual-performance/Performance";

import "../../styles/dash.css";

import Stats from "../stats/Stats";

import { getRandomName } from "../../methods/getRandomName";
import { getRandomMark } from "../../methods/getRandomMark";
import { genStudId } from "../../methods/genStudId";
import { setSubjects } from "../../methods/setSubjects";
import { setSemesters } from "../../methods/setSemesters";
// import { getRandomColor } from "../../methods/getRandomColor";

function Dash() {
  const [studs, setStuds] = useState([]);
  const [records, setRecords] = useState([]);
  const [studId, setStudId] = useState("");
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const students = localStorage.getItem("nos")
    ? localStorage.getItem("nos")
    : 20;
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const subjects = setSubjects(
    localStorage.getItem("nosub") ? localStorage.getItem("nosub") : 10
  );
  const years = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
  ];
  const semesters = setSemesters(
    localStorage.getItem("nosem") ? localStorage.getItem("nosem") : 2
  );
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    let studsArr = [];

    for (let i = 0; i < students; i++) {
      const studObj = {
        id: `S${genStudId(i + 1)}`,
        name: getRandomName(),
      };
      studsArr.push(studObj);
    }
    setStuds(studsArr);
    generateStudsRecords(studsArr);
  }, []);

  // generate records
  const generateStudsRecords = (studArr) => {
    let records = [];
    for (let i = 0; i < studArr.length; i++) {
      for (let s = 0; s < subjects.length; s++) {
        for (let y = 0; y < years.length; y++) {
          for (let t = 0; t < semesters.length; t++) {
            const obj = {
              studId: studArr[i].id,
              studName: studArr[i].name,
              subject: subjects[s],
              mark: getRandomMark(),
              grade: grades[grades.length - y - 1],
              semester: semesters[t],
              year: years[y],
            };

            records.push(obj);
          }
        }
      }
    }

    setRecords(records);
  };

  // filter by student ID
  const filterByStudId = records.filter((el) => {
    if (studId && studId !== "-- All --") {
      return el.studId === studId;
    } else {
      return el.studId !== null;
    }
  });

  // filter by year
  const filterByYear = filterByStudId.filter((el) => {
    if (year && year !== "-- All --") {
      return el.year === parseInt(year);
    } else {
      return el.year !== null;
    }
  });

  // filter by grade
  const filterByGrade = filterByYear.filter((el) => {
    if (grade && grade !== "-- All --") {
      return el.grade === parseInt(grade);
    } else {
      return el.grade !== null;
    }
  });

  // filter by subject
  const filterBySubject = filterByGrade
    .filter((el) => {
      if (subject && subject !== "-- All --") {
        return el.subject === subject;
      } else {
        return el.subject !== null;
      }
    })
    .sort((a, b) => b.year - a.year);

  if (studId && studId !== "-- All --") {
    const groupBySubjects = filterByStudId.reduce((groups, data) => {
      const subj = data.subject;
      if (!groups[subj]) {
        groups[subj] = [];
      }
      groups[subj].push(data);
      return groups;
    }, {});

    var finalGroupsBySubjects = Object.keys(groupBySubjects).map((subject) => {
      return {
        subject,
        data: groupBySubjects[subject],
      };
    });
  }

  // clear all filters
  const resetFilters = () => {
    setStudId("");
    setYear("");
    setGrade("");
    setSubject("");
  };

  // handle pagination
  const handlePagination = (event, value) => {
    setPage(value);
  };

  // pagination
  const noOfPages = Math.ceil(filterBySubject.length / itemsPerPage);
  const indexOfLast = page * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filterBySubject.slice(indexOfFirst, indexOfLast);

  return records.length > 0 ? (
    <div className="content-col">
      <div className="container-fluid inner-content py-4">
        <p style={{ fontSize: 25, marginLeft: 7 }}>Dashboard</p>

        <Stats
          records={records.length}
          grades={grades.length}
          years={years.length}
          studs={studs.length}
          subjects={subjects.length}
          semesters={semesters.length}
        />
        <Filters
          studs={studs}
          years={years}
          grades={grades}
          subjects={subjects}
          studId={studId}
          year={year}
          grade={grade}
          subject={subject}
          setStudId={setStudId}
          setYear={setYear}
          setGrade={setGrade}
          setSubject={setSubject}
          resetFilters={resetFilters}
        />

        <Records
          filterBySubject={filterBySubject}
          indexOfFirst={indexOfFirst}
          currentItems={currentItems}
          noOfPages={noOfPages}
          page={page}
          records={records}
          handlePagination={handlePagination}
        />

        {studId && studId !== "-- All --" && (
          <Performance
            studId={studId}
            finalGroupsBySubjects={finalGroupsBySubjects}
          />
          // <>
          //   <div className="row m-0 mb-3 ">
          //     <div className="col p-0">
          //       <p
          //         style={{
          //           fontSize: 20,
          //           marginLeft: 5,
          //           marginBottom: 5,
          //           textAlign: "center",
          //           fontWeight: 560,
          //         }}
          //       >
          //         Individual Students Marks
          //       </p>
          //       <p className="text-center mb-0">(STUD ID : {studId})</p>
          //     </div>
          //   </div>
          //   <div className="row m-0 mb-3 ">
          //     {finalGroupsBySubjects.map((el, i) => (
          //       <div className="subject-charts-col p-2 cus-border" key={i}>
          //         <LineChart
          //           finalGroupsBySubjects={el}
          //           title={el.subject}
          //           // color={getRandomColor()}
          //         />
          //       </div>
          //     ))}
          //   </div>
          // </>
        )}
      </div>
    </div>
  ) : (
    <div className="page-loading">
      <div className="spinner-border" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

export default Dash;
