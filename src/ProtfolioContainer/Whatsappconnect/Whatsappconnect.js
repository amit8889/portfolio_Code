import React from 'react'
import './Whatsappconnect.css'
import whatsapplogo from '../../assets/Home/whatsapplogo.gif';


const Whatsappconnect = () => {

    const URL="https://wa.me/+917983835208?text=Hi Amit"
  return <>
  <a   href={URL} className="whatsapp_background" target="_blank">
  <img src={whatsapplogo} class="whats-app"/>
</a>
  </>
}

export default Whatsappconnect