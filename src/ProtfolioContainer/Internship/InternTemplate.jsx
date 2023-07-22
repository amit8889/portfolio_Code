import React from 'react'

const InternTemplate = ({item}) => {
    
      return <>
        <div className='project_template'>
    
          <h1>{item.company}</h1>
          <div className='underline_style_contact'>
            <div style={{ width: '190px', height: "20px" }}><hr /></div></div>
          <div className='transform_effect'>
            <a id="template_certificate" href={item.certi} target="_blank">
              <img style={{ width: '90%', marginTop: '20px',maxHeight:'160px' }} src={item.img} alt="null" />
            </a>
            <div className='projectlink'>
              <a href={item.cmpURL} className='color_interRole' target='_blank'>{item.role}   <span className='internship_duration'>({item.time})</span> 
               <br/>
               
               </a>
            </div>
          
            <span className='internship_date'> Date : {item.date}</span>  <br/>
            <div className='projectTechnology'>
            </div>
            <p className='projecttech'> <b>Technology :</b> {item.tech}</p>
            <p className='projectdec'>{item.dec}</p>
    
          </div>
    
        </div>
      </>
    }
    
    
    
    export default InternTemplate