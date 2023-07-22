import React from 'react'
import './Aboutme.css';
import { aboutcontent } from '../../assets/Data/introdata';
import Resume from'../../assets/Home/Resume.pdf'

const Aboutme = () => {
    return <>
        
        <div className='about_container' id="about">
            <div className='about_heading  transform_effect'>
                <h1>About Me</h1>
                <p>Why Choose Me ?</p>
                <div className='underline_style'>
                    <div><hr /></div>

                </div>
            </div>
            <div className='about_picture_and_info'>
                <div className='profile_info_wrapper'>
                    <div className='profile_picture'>

                    </div>
                    <div className='profile_info'>
                        <div className='profile_info_content'>
                            <p>{aboutcontent}
                            </p>
                            
                            <p>Here are a Few Highlights:</p>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>SD Intern @Pinnacleworks Infotech (p) ltd</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Ex - JMD Web Studio (Intern)</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Solve 700+ DSA Questions</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Full Stack web developer</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Final Year Student</span>

                            </div>
                            
                            
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>React and Redux</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Redux for State Management</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Building REST API</span>

                            </div>
                            <div className='about_text'>
                                <div className='bulletpoint'></div>
                                <span>Managing database</span>

                            </div>



                        </div>
                        <div className='profile-options about_btn'>
                            <a style={{ textDecoration: 'none', color: 'wite', width: '100%' }} className='hireme' href="#contactusid">
                                <button className='btn primary-btn'>
                                    {''}
                                    Hire Me {" "}
                                </button>
                            </a>
                            <a href={Resume} download='Resume Amit.pdf' >
                                <button className='btn highlighted-btn'>Get Resume</button>


                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Aboutme
