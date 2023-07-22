import React from 'react'
import '../Technical/Technical.css'
import Template from './Template'
import './Certificate.css'
import { certificatelist } from '../../assets/Data/CetificateList'

const Certificate = () => {


   



    return <div className='technica_container' id="certificate" >
        <div className='contact_container transform_effect '>

            <h1>Certificate & License</h1>

            <div className='underline_style_contact'>
                <div id="maxdivwidth" style={{ width: '350px' }}><hr /></div></div>

        </div>
        <div className='certificate_text ' data-aos="fade-up"
                data-aos-anchor-placement="top-center">
            <div className='certificate_template' >
                {
                    certificatelist.map(item => (
                        <Template key={item.url} item={item} />)
                    )}




            </div>

        </div>
    </div>
}

export default Certificate