import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function LineChart(props) {
  // all records group by year
  const groupByYear =
    props.finalGroupsBySubjects &&
    props.finalGroupsBySubjects.data.reduce((groups, data) => {
      const yr = data.year;
      if (!groups[yr]) {
        groups[yr] = [];
      }
      groups[yr].push(data);
      return groups;
    }, {});

  const finalGroupByYear =
    groupByYear &&
    Object.keys(groupByYear).map((year) => {
      return {
        year,
        data: groupByYear[year],
      };
    });

  const getYearsSem = () => {
    const label = [];
    for (let y = 0; y < finalGroupByYear.length; y++) {
      for (let s = 0; s < finalGroupByYear[y].data.length; s++) {
        const sortBySem = finalGroupByYear[y].data.sort((a, b) =>
          a.semester.localeCompare(b.semester)
        );
        label.push(
          `${finalGroupByYear[y].year}-${
            sortBySem[s].semester === "Sem 1" ? "1" : "2"
          }`
        );
      }
    }

    return label;
  };

  const getSubjMarks = () => {
    const marks = [];
    for (let y = 0; y < finalGroupByYear.length; y++) {
      for (let s = 0; s < finalGroupByYear[y].data.length; s++) {
        const sortBySem = finalGroupByYear[y].data.sort((a, b) =>
          a.semester.localeCompare(b.semester)
        );
        marks.push(sortBySem[s].mark);
      }
    }

    return marks;
  };

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: props.title,
    },
    xAxis: {
      categories: getYearsSem() && getYearsSem(),
    },
    yAxis: {
      title: {
        text: "Marks",
      },
    },
    colors: ["#7a8aad"],
    tooltip: {
      crosshairs: true,
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: "#666666",
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        name: props.title,
        marker: {
          symbol: "circle",
        },
        data: getSubjMarks() && getSubjMarks(),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default LineChart;
