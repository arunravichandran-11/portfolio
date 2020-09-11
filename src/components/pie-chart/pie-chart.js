import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChartProgress extends React.Component {
  render() {
    let skillNames = Object.keys(this.props.skills);
    let skilLevels = Object.values(this.props.skills).map((item) => {
      return (item * 100) / 5;
    });
    const options = {
      title: {
        display: false,
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'left',
        fontSize: 44,
        align: 'start',
        labels: {
          // fontColor: 'rgb(255, 99, 132)',
          fontColor: 'blue',
        },
      },
    };
    const state = {
      labels: skillNames,
      datasets: [
        {
          label: 'Softwares',
          // backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4', '#C9DE00', '#GE1F00', 'lightgreen'],
          backgroundColor: ['#FF0000', '#00CED1', '#4B0082', '#228B22', '#A52A2A', '#696969'],
          hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
          data: skilLevels,
        },
      ],
    };

    return <Pie data={state} options={options} />;
  }
}

export default PieChartProgress;
