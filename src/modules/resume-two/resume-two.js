import React from 'react';
import IconComponent from '@fonts-exporter/font-exporter';
// const images = require.context('./images', true);
import './resume-two.scss';

class ResumeTwoComponent extends React.Component {
  renderTemplate(userProfile) {
    let img = images('./' + userProfile.profilepic).default;

    return (
      <div id='inner-container-two'>
        <div className='resume-two-container'>
          <div className='container-wrap'>
            <div className='header-section'>
              <div id='chevron'>
                <div className='name-role'>
                  <div className='name'>ArunBalaji Ravichandran</div>
                  <div className='role'>Software Engineer</div>
                </div>
              </div>
            </div>
            <div className='image-container'>
              <img src={img} alt='No Image' />
            </div>
            <div className='sections'>
              <div className='left-pane'>
                <div className='skills'>
                  <div className='Software'>
                    <div className='title'>
                      <IconComponent iconType='fas' iconName='laptop-code' />
                      <span>Software Skills</span>
                    </div>
                    <div className='skill-level-block'>
                      <div>
                        <h4>Programming languages</h4>
                        <div className='programming-language'>
                          {userProfile.softwareSkillList.languages.map((lang, i) => {
                            return (
                              <div key={i}>
                                <div className='item'>{lang.name}</div>
                                <span className='progress-level'>
                                  <div style={{width: lang.level}}></div>
                                </span>
                              </div>
                            );
                          })}

                          {}
                        </div>

                        <h4>Frameworks</h4>
                        <div className='programming-language'>
                          {userProfile.softwareSkillList.languages.map((lang, i) => {
                            return (
                              <div key={i}>
                                <div className='item'>{lang.name}</div>
                                <span className='progress-level'>
                                  <div style={{width: lang.level}}></div>
                                </span>
                              </div>
                            );
                          })}

                          {}
                        </div>

                        <h4>Databases</h4>
                        <div className='programming-language'>
                          {userProfile.softwareSkillList.languages.map((lang, i) => {
                            return (
                              <div key={i}>
                                <div className='item'>{lang.name}</div>
                                <span className='progress-level'>
                                  <div style={{width: lang.level}}></div>
                                </span>
                              </div>
                            );
                          })}

                          {}
                        </div>

                        <h4>Tools</h4>
                        <div className='programming-language'>
                          {userProfile.softwareSkillList.languages.map((lang, i) => {
                            return (
                              <div key={i}>
                                <div className='item'>{lang.name}</div>
                                <span className='progress-level'>
                                  <div style={{width: lang.level}}></div>
                                </span>
                              </div>
                            );
                          })}

                          {}
                        </div>

                        <h4>Module Bundlers</h4>
                        <div className='programming-language'>
                          {userProfile.softwareSkillList.languages.map((lang, i) => {
                            return (
                              <div key={i}>
                                <div className='item'>{lang.name}</div>
                                <span className='progress-level'>
                                  <div style={{width: lang.level}}></div>
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='education'>
                  <div className='title'>
                    <IconComponent iconType='fas' iconName='graduation-cap' />
                    <span>Education</span>
                  </div>

                  {userProfile.education.map((edu, index) => {
                    return (
                      <div key={index}>
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

                <div className='education'>
                  <div className='title'>
                    <IconComponent iconType='fas' iconName='shield-alt' />
                    <span>Awards</span>
                  </div>
                  <div className='award'>
                    <p>Spot Light Award Winner for 3 times in 3 years at Wall Street English and Pearson English</p>
                  </div>
                </div>
                <div className='education'>
                  <div className='title'>
                    <IconComponent iconType='fas' iconName='certificate' />
                    <span>Certification</span>
                  </div>
                  <div>
                    <p>Certified SAFe® 4 Practitioner, Scaled Agile, Inc</p>
                  </div>
                </div>
                <div className='education'>
                  <div className='title'>
                    <IconComponent iconType='fas' iconName='sitemap' />
                    <span>Organization</span>
                  </div>
                  <div>
                    {userProfile.Organization.map((org, i) => {
                      return (
                        <div className='companies' key={i}>
                          <div>
                            {org.name} ({org.period})
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className='right-pane'>
                <div className='contact-section'>
                  <div>
                    <div>
                      <div className='icon'>
                        <i className='material-icons'>phone</i>
                      </div>
                      <div className='content'>
                        <span>{userProfile.mobile}</span>
                      </div>
                    </div>
                    <div>
                      <div className='icon'>
                        <i className='material-icons'>email</i>
                      </div>
                      <div className='content'>
                        <span>{userProfile.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='summary'>
                  <div className='title'>
                    <IconComponent iconType='fas' iconName='user' />
                    <span>Profile</span>
                  </div>
                  <p>{userProfile.summary}</p>
                </div>

                <div className='main-content'>
                  <div className='work-experiences'>
                    <div className='title'>
                      <IconComponent iconType='fas' iconName='briefcase' />
                      <span>Work Experience</span>
                    </div>
                    <div className='worked-projects'>
                      {userProfile.projects.map((project, index) => {
                        return (
                          <div className='DigitalClassroom' key={index}>
                            <h4 className='role'>
                              {project.role} @ {project.company}
                            </h4>
                            <div className='location'>
                              <div className='project-company'>Project: {project.name}</div>
                              <div className='duration'>{project.duration}</div>
                            </div>
                            <ul>
                              {project.description.map((desc, index) => {
                                return <li key={index}>{desc}</li>;
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHtml(userProfile) {
    return (
      <div id='inner-container-two'>
        <h1> Arun </h1>
      </div>
    );
  }
  render() {
    let content = this.props.content;
    return (
      <div id='resume-container' className='resume-two-component-container'>
        {/* {this.renderTemplate(content)} */}

        {this.renderHtml(content)}
      </div>
    );
  }
}

export default ResumeTwoComponent;
