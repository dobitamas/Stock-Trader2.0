import React,{useState, useEffect} from 'react';
import ReactApexChart from "react-apexcharts";

export default function PieChart(props) {
    const [State, setState] = useState(
        {
        series: props.series,
        options: {
        chart: {
            width: 380,
            type: 'donut',
        },
        labels: ['Stock', 'Cash'],
        dataLabels: {
            enabled: true
        },
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {
                width: 200
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
    <div class="chart-wrap">
      <div id="chart">
      <ReactApexChart options={State? State.options : {}} series={State? State.series : []} type="donut" width={380} />
      </div>
    </div>
  </div>
 )
}
