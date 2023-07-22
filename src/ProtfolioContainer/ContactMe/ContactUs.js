import React, { useState } from 'react'
import './ContactUs.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
    const notify = () => toast.success('Thankyou,We will connect you as soon as possible.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        const errormessge = () => toast.error('Error !!! Try Again', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
  
            const [isDisabled, setDisabled] = useState(false);

    const submitForm= async(e)=>{
        e.preventDefault();
        
        setDisabled(true);

       try {
        
       let b=4/0;
        await emailjs.sendForm('service_j7w8t98','template_ht4ni7f',e.target,'4dAXC0FDkEaQFiWwT');
        document.getElementById('myform').reset();
        notify();
       // issendingMail=false;
       
       } catch (error) {
        errormessge();
       }

       setDisabled(false);
       

      

    }





    return <div className='contact'id="contact">
        <div className='contact_container transform_effect '>

            <h1>Contact Us</h1>

            <div className='underline_style_contact'>
                <div><hr /></div></div>

        </div>

        <div className='contact_form' id="contactusid" data-aos="flip-left">
           
            <form onSubmit={submitForm} id="myform">
                <label>Name</label><br />
                <input name='name' type="text" placeholder='Entre Your Name *' required minLength='4' maxLength="30" /><br />
                <label>Email</label><br />
                <input name='email'  type="email" required minLength='5' maxLength="30" placeholder='Entre Your Email *' /><br />
 
                
                <label>Message</label><br />
                <textarea name='message' required maxLength="100" placeholder='Hi Amit ,' >Hi Amit,</textarea><br />
                <button disabled={isDisabled} style={{backgroundColor:'red'}} className='btn highlighted-btn contactbtn' type='submit'>Send</button>
            </form>
        </div >
    </div >


}

export default ContactUs