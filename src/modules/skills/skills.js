import React from 'react';
import './skills.scss';
import PieChartProgress from '@components/pie-chart/pie-chart';
import BarChartProgress from '@components/bar-chart/bar-chart';
import DoughnutChartProgress from '@components/doughnut-chart/doughnut-chart';
import UserContext from '../../BaseComponents/UserContext';

class Skills extends React.Component {
  static contextType = UserContext;
  render() {
    let isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;

    let legendPosition = isSmallScreen ? 'top' : 'left';

    let content = this.context;

    return (
      <div className='parent-wrapper'>
        <h1 className='title' style={{textAlign: 'center'}}>
          EXPERTISE
        </h1>
        <div className='skill-container'>
          {content.skillSets.types && <BarChartProgress type='vertical' skills={content.skillSets.types}></BarChartProgress>}

          {content.skillSets.languages && (
            <DoughnutChartProgress legendPosition={legendPosition} name='Programming Languages' skills={content.skillSets.languages}></DoughnutChartProgress>
          )}

          {content.skillSets.JSFrameworks && (
            <DoughnutChartProgress legendPosition={legendPosition} name='JavaScript Frameworks' skills={content.skillSets.JSFrameworks} />
          )}

          {content.skillSets.automationFrameworks && (
            <DoughnutChartProgress legendPosition={legendPosition} name='Frameworks' skills={content.skillSets.automationFrameworks}></DoughnutChartProgress>
          )}

          {content.skillSets.bundlers && (
            <DoughnutChartProgress name='Bundlers' legendPosition={legendPosition} skills={content.skillSets.bundlers}></DoughnutChartProgress>
          )}

          {content.skillSets.tools && (
            <DoughnutChartProgress legendPosition={legendPosition} name='Tools' skills={content.skillSets.tools}></DoughnutChartProgress>
          )}

          {content.skillSets.database && (
            <DoughnutChartProgress name='Databases' legendPosition={legendPosition} skills={content.skillSets.database}></DoughnutChartProgress>
          )}
        </div>
      </div>

      // <div className='skill-container'>
      //   <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      //     <div style={{width: '100%', textAlign: 'center'}}>
      //       <BarChartProgress label='Expertise' type='vertical' skills={content.skillSets.types}></BarChartProgress>
      //     </div>
      //   </div>

      //   {content.skillSets.languages && (
      //     <div>
      //       <DoughnutChartProgress legendPosition={legendPosition} label='Programming Languages' skills={content.skillSets.languages}></DoughnutChartProgress>
      //     </div>
      //   )}

      //   {content.skillSets.JSFrameworks && (
      //     <div>
      //       <DoughnutChartProgress
      //         legendPosition={legendPosition}
      //         label='Programming Languages'
      //         skills={content.skillSets.JSFrameworks}
      //       ></DoughnutChartProgress>
      //     </div>
      //   )}

      //   {content.skillSets.automationFrameworks && (
      //     <div>
      //       <DoughnutChartProgress legendPosition={legendPosition} label='Frameworks' skills={content.skillSets.automationFrameworks}></DoughnutChartProgress>
      //     </div>
      //   )}

      //   {content.skillSets.bundlers && (
      //     <div>
      //       <DoughnutChartProgress legendPosition={legendPosition} skills={content.skillSets.bundlers}></DoughnutChartProgress>
      //     </div>
      //   )}

      //   {content.skillSets.tools && (
      //     <div>
      //       <DoughnutChartProgress legendPosition={legendPosition} skills={content.skillSets.tools}></DoughnutChartProgress>
      //     </div>
      //   )}

      //   {content.skillSets.database && (
      //     <div>
      //       <DoughnutChartProgress legendPosition={legendPosition} skills={content.skillSets.database}></DoughnutChartProgress>
      //     </div>
      //   )}
      // </div>
    );
  }
}
export default Skills;

// <div className='skill-container'>
// <div>
//   <BarChartProgress label='Programming Languages' type='vertical' skills={content.skillSets.languages}></BarChartProgress>
// </div>
// <div>
//   <BarChartProgress label='Frameworks' type='horizontal' skills={content.skillSets.frameworks}></BarChartProgress>
// </div>

// {content.skillSets.bundlers && (
//   <div>
//     <DoughnutChartProgress skills={content.skillSets.bundlers}></DoughnutChartProgress>
//   </div>
// )}

// <div>
//   <PieChartProgress skills={content.skillSets.tools}></PieChartProgress>
// </div>
// <div>
//   <BarChartProgress label='Automation Frameworks' type='vertical' skills={content.skillSets.automationFrameworks}></BarChartProgress>
// </div>
// <div>
//   <BarChartProgress label='Tools' type='vertical' skills={content.skillSets.automationTools}></BarChartProgress>
// </div>
// <div>
//   <PieChartProgress label='Test Management Tools' skills={content.skillSets.testManagementTools}></PieChartProgress>
// </div>
// </div>
