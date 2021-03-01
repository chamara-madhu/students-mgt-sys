import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { mean } from "../../methods/mean";

function Column(props) {
  const uniqueSubjects = [
    ...new Set(props.filterBySubject.map((item) => item.subject)),
  ];

  const getSubjectMarks = (records) => {
    let subjectMarks = [];

    const sortByMarks = records.sort((a, b) => a.mark - b.mark);

    for (let i = 0; i < uniqueSubjects.length; i++) {
      const filterSubjectMarks = sortByMarks.filter(
        (el) => el.subject === uniqueSubjects[i]
      );

      const markArr = [];

      for (let m = 0; m < filterSubjectMarks.length; m++) {
        markArr.push(filterSubjectMarks[m].mark);
      }
      subjectMarks.push(markArr);
    }

    return subjectMarks;
  };

  // set column data
  const setColumnData = () => {
    const allMarks = getSubjectMarks(props.filterBySubject);
    const Alldata = [];

    for (let i = 0; i < allMarks.length; i++) {
      let avg = mean(allMarks[i]);
      Alldata.push(avg);
    }

    return Alldata;
  };

  // get average marks data
  const setSplineData = () => {
    const allMarks = getSubjectMarks(props.records);
    const Alldata = [];

    for (let i = 0; i < allMarks.length; i++) {
      let avg = mean(allMarks[i]);
      Alldata.push(avg);
    }

    return Alldata;
  };

  const optionsColumn = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: "",
    },
    colors: ["#7a8aad"],
    xAxis: [
      {
        categories: uniqueSubjects,
        crosshair: true,

        title: {
          text: "Subjects",
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}",
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
        title: {
          text: "Marks",
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: "vertical",
      align: "left",
      x: 120,
      verticalAlign: "top",
      y: 100,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Marks",
        type: "column",
        data: setColumnData(),
      },
      {
        name: "Average Marks",
        type: "spline",
        data: setSplineData(),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={optionsColumn} />;
}

export default Column;
