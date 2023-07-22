import React, { useRef, useState } from 'react'
import './Navbar.css'
import menu from '../../assets/Home/menu.png'
import close from '../../assets/Home/close.png'
import { toast } from 'react-toastify';
const Navbar = () => {
    let width=window.innerWidth
    const[open,setopen]=useState(width<400?false:true);
    const[admin,setadmin]=useState(false);
    const ref=useRef(false);


    const errormessge = () => toast.error('Invalid credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

  
  return <>
  <div className='navbar_conatiner'>
      <div onClick={()=>setopen(!open)} >
      <img className='navimg' src={open?close:menu}/>
      </div>
     {
        open&&
            <div className='links'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#eductaion'>Eductaion</a>
        <a href='#skills'>Skills</a>
        <a href='#internship'>Internship</a>
        <a href='#project'>Projects</a>
        <a href='#certificate'>Certificate</a>
        <a href='#imp'>Important</a>
        <a href='#contact'>Contact Us</a>
        <a href='#admin' onClick={()=>setadmin(!admin)}>Admin Login</a>
       { admin&&<div className='admin'>
          
        <input type='text' maxLength={15} required placeholder='Entre Your Screte Key'/><br/>
        <button ref={ref} type='button' onClick={()=>{
            ref.current.disabled=true;
            setTimeout(errormessge,800);
            
            ref.current.disabled=false;
        }}> Login</button>
         {/* <img src={close} onClick={()=>setadmin(false)}/> */}
     </div>}
     </div>
        
     }
   
     </div>
  </>
}

export default Navbar