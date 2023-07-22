import React from 'react'
import scrollDown from '../../assets/Home/scroll.PNG'
import './scroll.css'
const Scroll = () => {
    const scrollDownfunction=()=>{
       
    }
  return <>
     <img  onScrollCapture={()=>scrollDownfunction(e)} src={scrollDown} className='scrolldown'/>
  </>
}

export default Scroll