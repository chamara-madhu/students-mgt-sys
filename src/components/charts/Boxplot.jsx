import React from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

import { q1 } from "../../methods/q1";
import { q3 } from "../../methods/q3";
import { median } from "../../methods/median";
import { mean } from "../../methods/mean";

HighchartsMore(Highcharts);

function Boxplot(props) {
  const uniqueSubjects = [
    ...new Set(props.filterBySubject.map((item) => item.subject)),
  ];

  const getSubjectMarks = () => {
    let subjectMarks = [];

    const sortByMarks = props.filterBySubject.sort((a, b) => a.mark - b.mark);

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

  // set box plot data
  const setBoxplotData = () => {
    const allMarks = getSubjectMarks() ? getSubjectMarks() : [];

    const Alldata = [];

    for (let i = 0; i < allMarks.length; i++) {
      let arr = [];

      arr[0] = allMarks[i][0];
      arr[1] = q1(allMarks[i]);
      arr[2] = median(allMarks[i]);
      arr[3] = q3(allMarks[i]);
      arr[4] = allMarks[i][allMarks[i].length - 1];

      Alldata.push(arr);
    }

    return Alldata;
  };

  // set avg marks data
  const setAvgMarks = () => {
    const allMarks = getSubjectMarks(props.records);

    const Alldata = [];

    for (let i = 0; i < allMarks.length; i++) {
      let avg = mean(allMarks[i]);

      Alldata.push([i, avg]);
    }

    return Alldata;
  };

  const options = {
    chart: {
      type: "boxplot",
    },

    title: {
      text: "",
    },

    legend: {
      enabled: false,
    },
    colors: ["#7a8aad"],
    xAxis: {
      categories: uniqueSubjects, // ["1", "2", "3", "4", "5"],
      title: {
        text: "Subjects",
      },
    },

    yAxis: {
      title: {
        text: "Students Marks",
      },
    },

    series: [
      {
        name: "Students Marks",
        data: setBoxplotData(),
        tooltip: {
          headerFormat: "{point.key}<br/>",
        },
      },
      {
        name: "Avg Mark",
        color: Highcharts.getOptions().colors[0],
        type: "scatter",
        data: setAvgMarks(),
        marker: {
          fillColor: "white",
          lineWidth: 1,
          lineColor: Highcharts.getOptions().colors[0],
        },
        tooltip: {
          pointFormat: "Mark: {point.y}",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Boxplot;
