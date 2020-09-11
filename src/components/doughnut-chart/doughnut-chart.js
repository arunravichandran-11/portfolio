import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './doughnut-chart.scss';

class DoughnutChartProgress extends React.Component {
  render() {
    let skillNames = Object.keys(this.props.skills);
    let skilLevels = Object.values(this.props.skills).map((item) => {
      return (item * 100) / 5;
    });
    const state = {
      labels: skillNames,
      datasets: [
        {
          label: 'Softwares',
          backgroundColor: ['#FF0000', '#00CED1', '#4B0082', '#228B22', '#A52A2A', '#696969'],
          hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
          borderAlign: 'center',
          data: skilLevels,
        },
      ],
    };

    const options = {
      responsive: true,
      legend: {
        fullWidth: false,
        display: true,
        position: this.props.legendPosition || 'left',
        labels: {
          fontSize: 14,
          boxWidth: 20,
          padding: 20,
          usePointStyle: true,
        },
      },
    };

    const {name} = this.props;

    return (
      <div className='chart-wrapper'>
        {name && <h3 className='title'>{name}</h3>}
        <Doughnut data={state} options={options} />
      </div>
    );
  }
}

export default DoughnutChartProgress;
