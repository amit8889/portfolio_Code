import React from 'react'


const ProjectTemplate = ({ item }) => {
  return <>
    <div className='project_template'>

      <h1>{item.certifiedby}</h1>
      <div className='underline_style_contact'>
        <div style={{ width: '150px', height: "20px" }}><hr /></div></div>
      <div className='transform_effect'>
        <a id="template_certificate" href={item.demo} target="_blank">
          <img style={{ width: '90%', marginTop: '20px' }} src={item.url} alt="null" />
        </a>
        <div className='projectlink'>
          <a href={item.demo} target='_blank'>Demo</a>
          <a href={item.sourcecode}  target='_blank'>Sourcecode</a>
          <a href={item.video}  target='_blank'>Documentation</a>
        </div>
        <div className='projectTechnology'>
        </div>
        <p className='projecttech'> <b>Technology :</b> {item.tech}</p>
        <p className='projectdec'>{item.text}</p>

      </div>

    </div>
  </>
}



export default ProjectTemplate