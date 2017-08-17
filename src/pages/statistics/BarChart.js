import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Audi', 'BMW', 'VW', 'Subaru', 'Toyota', 'Jeep', 'Mercedes'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 33]
    }
  ]
};

class BarChart extends React.Component{
  render() {
    return (
      <div className="bar-chart">
        <Bar
          data={data}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
};

export default BarChart;
