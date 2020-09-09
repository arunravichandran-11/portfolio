import React from 'react';
import {HorizontalBar, Bar} from 'react-chartjs-2';
import './bar-chart.scss';

class BarChartProgress extends React.Component {
  render() {
    let skillNames = Object.keys(this.props.skills);
    let skilLevels = Object.values(this.props.skills).map((item) => {
      // return (item * 100) / 5;
      return item;
    });

    const options = {
      legend: {
        labels: {
          boxWidth: 60,
          boxColor: 'blue',
          fontColor: 'black',
          fontSize: 20,
          fillStyle: 'blue',
          backgroundColor: 'blue',
          generateLabels: function () {},
        },
        fillColor: 'blue',
      },
      legendItems: {},
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true,
              display: this.props.type === 'horizontal' ? false : true,
            },
            ticks: {
              min: 0,
              stepSize: 1,
              max: 5,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 1,
              max: 5,
            },
            gridLines: {
              offsetGridLines: true,
              display: this.props.type === 'horizontal' ? true : false,
            },
          },
        ],
      },
    };
    const state = {
      labels: skillNames,
      datasets: [
        {
          label: this.props.label,
          backgroundColor: ['#FF0000', '#00CED1', '#4B0082', '#52D726', '#FFEC00', '#FF7300'],
          hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
          data: skilLevels,
          barPercentage: 0.8,
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className='container'>
        {this.props.type === 'horizontal' ? (
          <HorizontalBar data={state} width={100} height={50} options={options} />
        ) : (
          <Bar data={state} width={100} height={50} options={options} />
        )}
      </div>
    );
  }
}

export default BarChartProgress;
