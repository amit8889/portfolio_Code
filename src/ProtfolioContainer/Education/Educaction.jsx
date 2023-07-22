import React from 'react'
import './Education.css'


const Educaction = () => {
  return <div className='education_container' id="eductaion">
    <div className='about_heading  transform_effect'>
      <h1>Education</h1>

      <div className='underline_style'>
        <div style={{ width: '250px' }}><hr /></div>

      </div>
    </div>

    <div className='education_text' data-aos="fade-right">
      <div className='graduation'>
        <div className='datast_text_technical transform_effect'>
          <span className='post'>Graduation
            <div className='underline_style_contact'>
              <div style={{ width: '140px', marginBottom: '10px', marginTop: '5px' }}><hr /></div></div>
          </span>

        </div>

        <div className='eduction_imgsecton'>
           <div>
             {/* <img src={img} width='180px'/> */}
           </div>
           <div>
           <p className='collage_name'>Chaudhary Charan Singh University, Meerut</p>
        <span className='time'> July-2020          </span>
        <span className='time'>     July-2024(excepted)</span><br />
        <span className='branch'>B.Tech(CSE)</span>
        <br />
        <span className='educationmark'>8.1 CGPA</span>
           </div>
        </div>

      </div>



      <div className='graduation'>
        <div className='datast_text_technical transform_effect'>
          <span className='post'>Inter Mediate
            <div className='underline_style_contact'>
              <div style={{ width: '180px', marginBottom: '10px', marginTop: '5px' }}><hr /></div></div>
          </span>

        </div>
        <p className='collage_name'>Central Academy Senior Secondary School - Basti</p>
        <span className='time'> July-2018          </span>
        <span className='time'>     May-2020</span><br />
        <span className='branch'>Science Stream</span>
        <br />
        <span className='educationmark'>81% (Percent)</span>

      </div>
      <div className='graduation'>
        <div className='datast_text_technical transform_effect'>
          <span className='post'>High School
            <div className='underline_style_contact'>
              <div style={{ width: '160px', marginBottom: '10px', marginTop: '5px' }}><hr /></div></div>
          </span>

        </div>
        <p className='collage_name'>Shri Ram Public School, Civil Lines, Basti</p>
        <span className='time'> May-2017          </span>
        <span className='time'>     April-2018</span><br />
       
       
        <span className='educationmark'>81%(Percent)</span>

      </div>


    </div>
  </div>
}

export default Educaction