import React from "react";
import { use } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataResp = use(marksPromise);
  const marksData = marksDataResp.data;
  // console.log(marksData);

  const marksChartData = marksData.map(elem => {
    const student = {
      id: elem.id,
      name: elem.name,
      physics: elem.Physics,
      chemistry: elem.Chemistry,
      maths: elem.Math,
      science: elem.Science,
    }
    const avg = (student.physics + student.chemistry + student.maths + student.science) / 4;  
    student.avg = avg;

    return student;
  })
  console.log(marksChartData);

  return (
    <div>
      <h2>Marks Chart</h2>

      <BarChart width={600} height={400} data={marksChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Bar dataKey="avg" fill="#8dd1e1" /> */}
        <Bar dataKey="physics" fill="#82ca9d" />
        <Bar dataKey="chemistry" fill="#ffc658" />
        <Bar dataKey="maths" fill="#d0ed57" />
        <Bar dataKey="science" fill="#a4de6c" />
      </BarChart>

    </div>
  );
};

export default MarksChart;
