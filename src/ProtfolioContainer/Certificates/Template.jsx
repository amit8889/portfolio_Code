import React from 'react'


const Template = ({ item }) => {
  return <>
    <div className='templateimage '>
      <h1>{item.certifiedby}</h1>
      <div className='underline_style_contact'>
        <div style={{ width: '130px', height: "20px" }}><hr /></div></div>
        <div className='transform_effect'>
      <a id="template_certificate"  href={item.link} target="_blank">
        <img style={{ width: '340px',height:'230px',marginTop:'20px', marginBottom:'20px' }} src={item.url} alt="null" />
        <h5 >{item.title}</h5>
        <p id="title_certificate">{item.text}</p>
      </a>
      </div>
    </div>
  </>
}

export default Template