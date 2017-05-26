import React from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';

const dataForBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const BarChart = React.createClass({
  displayName: 'BarExample',

  render() {
    return (
      <div style={{
        margin:"20px 20px 20px 20px"
      }}>
        <h4>{this.props.title}</h4>
        <Bar
          data={dataForBar}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});


const dataForLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const LineChart = React.createClass({
  displayName: 'LineExample',

  render() {
    return (
      <div style={{
        margin:"20px 20px 20px 20px"
      }}>
        <h4>{this.props.title}</h4>
        <Line data={dataForLine} />
      </div>
    );
  }
});


const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const DoughnutChart = React.createClass({
  displayName: 'DoughnutExample',

  render() {
    return (
      <div style={{
        margin:"20px 20px 20px 20px"
      }}>
        <h4>{this.props.title}</h4>
        <Doughnut data={data} />
      </div>
    );
  }
});

export {
  BarChart,
  LineChart,
  DoughnutChart
}
