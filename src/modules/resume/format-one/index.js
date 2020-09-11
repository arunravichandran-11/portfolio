import React from 'react';
import './index.scss';

import IconComponent from '@fonts-exporter/font-exporter';

class ResumeFormatOne extends React.Component {
  renderTemplate(userProfile) {
    return (
      <div id='resume-wrap'>
        <div id='inner-container'>
          <div className='resume-one-component-wrapper'>
            <div className='name-and-contact'>
              <div>
                <h3>{userProfile.name}</h3>
              </div>
              <div>
                <p>
                  {/* <i className='fa fa-envelope fa-1x' aria-hidden='true'></i> */}
                  {/* <IconComponent iconType='fas' size='1x' iconName='envelope' /> */}
                  <span>Email:</span>
                  <span>{userProfile.email}</span>
                </p>
                <p>
                  {/* <i className='fa fa-mobile fa-2x' aria-hidden='true'></i> */}
                  {/* <IconComponent iconType='fas' size='1x' iconName='mobile-alt' /> */}
                  <span>Mobile:</span>
                  <span>{userProfile.mobile}</span>
                </p>
              </div>
            </div>

            <div className='container'>
              <div className='stepper__row stepper__row'>
                <div className='stepper--vertical'>
                  <div className='stepper--vertical__circle'></div>
                  <div className='stepper--vertical__details'>
                    <h3 className='heading__three'>Profession Summary</h3>
                    <p className='paragraph summary'>{userProfile.summary}</p>
                    <div className='button__rectangle'></div>
                  </div>
                </div>
              </div>
              <div className='stepper__row stepper__row'>
                <div className='stepper--vertical'>
                  <div className='stepper--vertical__circle'></div>
                  <div className='stepper--vertical__details'>
                    <h3 className='heading__three'>Work Experience</h3>
                    <div className='paragraph'>
                      {userProfile.short_projects.map((project, i) => {
                        return (
                          <div className='work-experiences' key={i}>
                            <div className='worked-projects'>
                              <div className='Projects DigitalClassroom'>
                                <div className='what-and-when'>
                                  <div className='role'>{project.role}</div>
                                  <div className='divider'>|</div>
                                  <div className='project-company'>{project.company}</div>
                                  <div className='duration'>
                                    {project.duration}
                                    <div className='stepper'>
                                      <div className='stepper-container'></div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div className='project-description'>
                                  <strong>{project.name} -</strong>
                                  <span>{project.pd}</span>
                                </div>
                                <h4>Roles and Responsibilities</h4>
                                <ul>
                                  {project.description.map((data, index) => (
                                    <li key={index}>{data}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='button__rectangle'></div>
                </div>
              </div>
              <div className='stepper__row stepper__row'>
                <div className='stepper--vertical'>
                  <div className='stepper--vertical__circle'></div>
                  <div className='stepper--vertical__details'>
                    <h3 className='heading__three'>Skills</h3>
                    <div className='skills-container'>
                      <div className='software-skills'>
                        <div>Programming Languages</div>
                        <div>Java, Javascript</div>
                      </div>
                      <div className='software-skills'>
                        <div>Automation Tools</div>
                        <div>Selenium WebDriver, SoapUI</div>
                      </div>
                      <div className='software-skills'>
                        <div>Automation Frameworks</div>
                        <div>Page Object Model, TestNG, Maven</div>
                      </div>
                      <div className='software-skills'>
                        <div>Test Management</div>
                        <div>Jira, HP Quality Center, HP ALM</div>
                      </div>
                      <div className='software-skills'>
                        <div>Databases</div>
                        <div>SQL Server, MySQL</div>
                      </div>
                      <div className='software-skills'>
                        <div>Version Control</div>
                        <div>GIT</div>
                      </div>
                    </div>
                    <div className='button__rectangle'></div>
                  </div>
                </div>
              </div>
              <div></div>
              <div className='stepper__row stepper__row'>
                <div className='stepper--vertical'>
                  <div className='stepper--vertical__circle'></div>
                  <div className='stepper--vertical__details'>
                    <h3 className='heading__three'>Education</h3>
                    <div className='paragraph'>
                      {userProfile.education.map((edu, i) => {
                        return (
                          <div key={i}>
                            <div className='year-degree'>
                              <div className='degree'>
                                <div className='role'>
                                  {edu.degree}, {edu.university}
                                </div>
                                <div _ngcontent-vri-c12='' className='duration'>
                                  {edu.batch}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className='button__rectangle'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    let content = this.props.content;
    return (
      <div id='print-resume' className='resume-format-one'>
        {this.renderTemplate(content)}
      </div>
    );
  }
}

export default ResumeFormatOne;
