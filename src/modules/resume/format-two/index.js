import React from 'react';
import './index.scss';

import IconComponent from '@fonts-exporter/font-exporter';

class ResumeFormatTwo extends React.Component {
  generate(userProfile) {
    return (
      <div>
        <div className='resume-main-container'>
          <div className='header'>
            <div>
              <div className='name'>{userProfile.name}</div>
              <div className='role'>
                <span>Software Engineer | FrontEnd Specialist | Full Stack Developer</span>
              </div>
              <div className='personal-information'>
                <div>
                  <div>
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                    <span>{userProfile.email}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <i className='fa fa-mobile' aria-hidden='true'></i>
                    <span>{userProfile.mobile}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='left-pane'>
              <div className='title'>Summary</div>
              <hr />
              <p>{userProfile.summary}</p>
              <div className='experience'>
                <div className='title'>Professional Experience</div>
                <hr />
                <div>
                  {userProfile.short_projects.map((project, index) => {
                    return (
                      <div className='work-experiences' key={index}>
                        <div className='worked-projects'>
                          <div className='Projects DigitalClassroom'>
                            <div className='role'>
                              <span>
                                {project.role} | {project.company}
                              </span>
                              <span>{project.duration}</span>
                            </div>
                            <hr />
                            <ul>
                              {project.description.map((desc, index) => {
                                return <li key={index}>{desc}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='right-pane'>
              <div className='skill-level-block'>
                <div className='title'>
                  <span>Expertise</span>
                  <hr />
                </div>
                <div>
                  <h4>Programming languages:</h4>
                  <div className='programming-language'>
                    <ul>
                      {userProfile.softwareSkillList.languages.map((lang, i) => {
                        return <li key={i}>{lang.name}</li>;
                      })}
                    </ul>
                  </div>

                  <h4>Frameworks:</h4>
                  <div className='programming-language'>
                    <ul>
                      {userProfile.softwareSkillList.frameworks.map((lang, i) => {
                        return <li key={i}>{lang.name}</li>;
                      })}
                    </ul>
                  </div>

                  <h4>Databases:</h4>
                  <div className='programming-language'>
                    <ul>
                      {userProfile.softwareSkillList.database.map((lang, i) => {
                        return <li key={i}>{lang.name}</li>;
                      })}
                    </ul>
                  </div>

                  <h4>Tools:</h4>
                  <div className='programming-language'>
                    <ul>
                      {userProfile.softwareSkillList.tools.map((lang, i) => {
                        return <li key={i}>{lang.name}</li>;
                      })}
                    </ul>
                  </div>

                  <h4>Module Bundlers:</h4>
                  <div className='programming-language'>
                    <ul>
                      {userProfile.softwareSkillList.bundlers.map((lang, i) => {
                        return <li key={i}>{lang.name}</li>;
                      })}
                    </ul>
                  </div>

                  <h4>Other Tools:</h4>
                  <div className='programming-language'>
                    <ul>
                      <li>Unit Testing: Jest, Jasmine, karma</li>
                      <li>Automation Testing: Selenium, TestNG, Maven, POM</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='education'>
                <div className='title'>Education</div>
                <hr />

                {userProfile.education.map((edu, index) => {
                  return (
                    <div key={index}>
                      <div className='year-degree'>
                        <div className='degree'>
                          <div className='role'>
                            {edu.degree}, {edu.university},
                          </div>
                          <div className='duration'>
                            <span>{userProfile.location}</span>
                            <span>{edu.batch}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='education'>
                <div className='title'>
                  <span>Certification</span>
                  <hr />
                </div>
                <div>
                  <p>Certified SAFe® 4 Practitioner, Scaled Agile, Inc</p>
                </div>
              </div>
              <div className='education'>
                <div className='title'>
                  <span>Awards</span>
                  <hr />
                </div>
                <ul>
                  {userProfile.awards.map((award, index) => {
                    return <li key={index}>{award.name}</li>;
                  })}
                </ul>
              </div>
              <div className='education'>
                <div className='title'>
                  <span>Organization</span>
                  <hr />
                </div>
                <div>
                  <ul>
                    {userProfile.Organization.map((org, index) => {
                      return (
                        <li key={index}>
                          {org.name} ({org.period})
                        </li>
                      );
                    })}
                  </ul>
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
      <div className='resume-format-two' id='print-resume'>
        {this.generate(content)}
      </div>
    );
  }
}

export default ResumeFormatTwo;

// renderTemplate(userProfile) {
//   return (
//     <div id='resume-wrap'>
//       <div id='inner-container'>
//         <div className='resume-one-component-wrapper'>
//           <div className='name-and-contact'>
//             <div>
//               <h3>{userProfile.name}</h3>
//             </div>
//             <div>
//               <p>
//                 {/* <i className='fa fa-envelope fa-1x' aria-hidden='true'></i> */}
//                 {/* <IconComponent iconType='fas' size='1x' iconName='envelope' />
//                  */}
//                 <span>Email:</span>
//                 <span>{userProfile.email}</span>
//               </p>
//               <p>
//                 {/* <i className='fa fa-mobile fa-2x' aria-hidden='true'></i> */}
//                 {/* <IconComponent iconType='fas' size='1x' iconName='mobile-alt' /> */}
//                 <span>Phone:</span>
//                 <span>{userProfile.mobile}</span>
//               </p>
//             </div>
//           </div>

//           <div className='container'>
//             <div className='stepper__row stepper__row'>
//               <div className='stepper--vertical'>
//                 <div className='stepper--vertical__circle'></div>
//                 <div className='stepper--vertical__details'>
//                   <h3 className='heading__three'>Profession Summary</h3>
//                   <p className='paragraph'>{userProfile.summary}</p>
//                   <div className='button__rectangle'></div>
//                 </div>
//               </div>
//             </div>
//             <div className='stepper__row stepper__row'>
//               <div className='stepper--vertical'>
//                 <div className='stepper--vertical__circle'></div>
//                 <div className='stepper--vertical__details'>
//                   <h3 className='heading__three'>Work Experience</h3>
//                   <div className='paragraph'>
//                     {userProfile.short_projects.map((project, i) => {
//                       return (
//                         <div className='work-experiences' key={i}>
//                           <div className='worked-projects'>
//                             <div className='Projects DigitalClassroom'>
//                               <div className='what-and-when'>
//                                 <div className='role'>{project.role}</div>
//                                 <div className='divider'>|</div>
//                                 <div className='project-company'>{project.company}</div>
//                                 <div className='duration'>
//                                   {project.duration}
//                                   <div className='stepper'>
//                                     <div className='stepper-container'></div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <hr />
//                               <div className='project-description'>
//                                 <strong>{project.name} -</strong>
//                                 <span>{project.pd}</span>
//                               </div>
//                               <h4>Roles and Responsibilities</h4>
//                               <ul>
//                                 {project.description.map((data, index) => (
//                                   <li key={index}>{data}</li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <div className='button__rectangle'></div>
//               </div>
//             </div>
//             <div className='stepper__row stepper__row'>
//               <div className='stepper--vertical'>
//                 <div className='stepper--vertical__circle'></div>
//                 <div className='stepper--vertical__details'>
//                   <h3 className='heading__three'>Skills</h3>
//                   <div className='skills-container'>
//                     <div className='software-skills'>
//                       <div>Programming Languages</div>
//                       <div>Java, Javascript</div>
//                     </div>
//                     <div className='software-skills'>
//                       <div>Automation Tools</div>
//                       <div>Selenium WebDriver, SoapUI</div>
//                     </div>
//                     <div className='software-skills'>
//                       <div>Automation Frameworks</div>
//                       <div>Page Object Model, TestNG, Maven</div>
//                     </div>
//                     <div className='software-skills'>
//                       <div>Test Management</div>
//                       <div>Jira, HP Quality Center, HP ALM</div>
//                     </div>
//                     <div className='software-skills'>
//                       <div>Databases</div>
//                       <div>SQL Server, MySQL</div>
//                     </div>
//                     <div className='software-skills'>
//                       <div>Version Control</div>
//                       <div>GIT</div>
//                     </div>
//                   </div>
//                   <div className='button__rectangle'></div>
//                 </div>
//               </div>
//             </div>
//             <div></div>
//             <div className='stepper__row stepper__row'>
//               <div className='stepper--vertical'>
//                 <div className='stepper--vertical__circle'></div>
//                 <div className='stepper--vertical__details'>
//                   <h3 className='heading__three'>Education</h3>
//                   <div className='paragraph'>
//                     {userProfile.education.map((edu, i) => {
//                       return (
//                         <div key={i}>
//                           <div className='year-degree'>
//                             <div className='degree'>
//                               <div className='role'>
//                                 {edu.degree}, {edu.university}
//                               </div>
//                               <div _ngcontent-vri-c12='' className='duration'>
//                                 {edu.batch}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                   <div className='button__rectangle'></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
