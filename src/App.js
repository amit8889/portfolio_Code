
import './App.css';
import Home from './ProtfolioContainer/Home/Home';
import Aboutme from './ProtfolioContainer/Aboutme/Aboutme';

import ContactUs from './ProtfolioContainer/ContactMe/ContactUs';
import { useEffect } from 'react';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './ProtfolioContainer/Footer/Footer';
import Technical from './ProtfolioContainer/Technical/Technical';
import Certificate from './ProtfolioContainer/Certificates/Certificate';
import Educaction from './ProtfolioContainer/Education/Educaction'
import Project from './ProtfolioContainer/Project/Project'
import ImportantLink from './ProtfolioContainer/Important/ImportantLink'
import Whatsappconnect from './ProtfolioContainer/Whatsappconnect/Whatsappconnect'
import Internship from './ProtfolioContainer/Internship/Internship';
import Scroll from './ProtfolioContainer/Scroll/Scroll';
import Navbar from './ProtfolioContainer/Navbar/Navbar';
import Experience from './ProtfolioContainer/Experience/Experience';

function App() {



  useEffect(() => {

    AOS.init({
      disable: function () {
        var maxWidth = 1000;
        return window.innerWidth < maxWidth;
      }
    });
    AOS.refresh();
    // document.addEventListener("DOMContentLoaded", function() {
    //   setTimeout(function() { AOS.refresh(); }, 100);
    // });
  }, []);
  return <div className='App'>
    <Navbar />
    <Home />
    <Scroll />
    <Aboutme />
    {/* <Experience/> */}
    <Educaction />
    <Technical />
    <Internship />
    <Project />
    <Certificate />
    <ImportantLink />
    <ContactUs />
    <Footer />
    <Whatsappconnect />

    <ToastContainer />
  </div>
}

export default App;
