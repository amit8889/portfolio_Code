import React from 'react'
import Template from '../Certificates/Template';
import './Project.css';
import ProjectTemplate from './ProjectTemplate';
import { projectlist } from '../../assets/Data/Projectlist';
const Project = () => {


 


  return <div className='project_container' id="project">
    <div className='about_heading  transform_effect'>
      <h1>Projects</h1>

      <div className='underline_style'>
        <div style={{ width: '180px' }}><hr /></div>

      </div>
    </div>
    <div className='project_text' data-aos="flip-right">

      <div className='certificate_template_wrap'>
        { 
                    projectlist.map(item => (
                        <ProjectTemplate key={item.url} item={item} />)
                    )}

      </div>
    </div>
  </div>
}

export default Project