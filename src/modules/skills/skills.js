import React from 'react';
import './skills.scss';
import BarChartProgress from '@components/bar-chart/bar-chart';
import DoughnutChartProgress from '@components/doughnut-chart/doughnut-chart';
import UserContext from '../../BaseComponents/UserContext';

class Skills extends React.Component {
  static contextType = UserContext;
  render() {
    let content = this.context;

    return (
      <div className='skill-container'>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '50%', textAlign: 'center'}}>
            <div>
              <h2>EXPERTISE</h2>
            </div>
            <BarChartProgress label='Expertise' type='vertical' skills={content.skillSets.types}></BarChartProgress>
          </div>
        </div>

        {content.skillSets.languages && (
          <div>
            <div>
              <h2>Programming Lanaguages</h2>
            </div>
            <DoughnutChartProgress label='Programming Languages' skills={content.skillSets.languages}></DoughnutChartProgress>
          </div>
        )}

        {content.skillSets.JSFrameworks && (
          <div>
            <div>
              <h2>JS frameworks</h2>
            </div>
            <DoughnutChartProgress label='Programming Languages' skills={content.skillSets.JSFrameworks}></DoughnutChartProgress>
          </div>
        )}

        {content.skillSets.automationFrameworks && (
          <div>
            <div>
              <h2>Frameworks (Automation)</h2>
            </div>
            <DoughnutChartProgress label='Frameworks' skills={content.skillSets.automationFrameworks}></DoughnutChartProgress>
          </div>
        )}

        {content.skillSets.bundlers && (
          <div>
            <div>
              <h4>Module Bundlers</h4>
            </div>
            <DoughnutChartProgress skills={content.skillSets.bundlers}></DoughnutChartProgress>
          </div>
        )}

        {content.skillSets.tools && (
          <div>
            <div>
              <h2>Tools</h2>
            </div>
            <DoughnutChartProgress skills={content.skillSets.tools}></DoughnutChartProgress>
          </div>
        )}

        {content.skillSets.database && (
          <div>
            <div>
              <h2>Database</h2>
            </div>
            <DoughnutChartProgress skills={content.skillSets.database}></DoughnutChartProgress>
          </div>
        )}
      </div>
    );
  }
}
export default Skills;

// <div>
//   <PieChartProgress label='Test Management Tools' skills={content.skillSets.testManagementTools}></PieChartProgress>
// </div>
