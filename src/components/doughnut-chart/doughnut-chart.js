import React from 'react';
import {Doughnut} from 'react-chartjs-2';

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
      title: {
        display: true,
        fontSize: 18,
      },
      legend: {
        display: true,
        position: 'left',
        labels: {
          fontSize: 17,
        },
      },
    };

    return <Doughnut data={state} options={options} />;
  }
}

export default DoughnutChartProgress;
