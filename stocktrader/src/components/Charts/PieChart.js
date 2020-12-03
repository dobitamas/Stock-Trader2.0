import React,{useState, useEffect} from 'react';
import ReactApexChart from "react-apexcharts";

export default function PieChart(props) {
    const [State, setState] = useState(
        {
        series: props.series,
        options: {
        chart: {
            width: '50%',
            type: 'donut',
        },
        labels: ['Stock', 'Cash'],
        dataLabels: {
            enabled: true
        },
        responsive: [{
            breakpoint: '50%',
            options: {
            chart: {
                width: '50%'
            },
            legend: {
                show: false
            }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    }}
    );
  

 return (
  <div>
    <div className="chart-wrap">
      <div id="chart">
      <ReactApexChart options={State? State.options : {}} series={State? State.series : []} type="donut" width={"200%"} />
      </div>
    </div>
  </div>
 )
}
