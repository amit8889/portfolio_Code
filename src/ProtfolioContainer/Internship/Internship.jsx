import React from 'react'

import InternTemplate from './InternTemplate'
import { Internlist } from '../../assets/Data/InternList'
const Internship = () => {
   
 
      return <div className='project_container' id="internship">
        <div className='about_heading  transform_effect'>
          <h1>Internship</h1>
    
          <div className='underline_style'>
            <div style={{ width: '210px' }}><hr /></div>
    
          </div>
        </div>
        <div className='project_text' data-aos="flip-right">
    
          <div className='certificate_template_wrap'>
            { 
                        Internlist.map(item => (
                            <InternTemplate key={item.url} item={item} />)
                        )}
    
          </div>
        </div>
      </div>
    }
    
    export default Internship 