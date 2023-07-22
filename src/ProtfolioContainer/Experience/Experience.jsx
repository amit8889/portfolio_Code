import React from 'react'
import './Experience.css'
import java from '../../assets/Image/tech/java.svg'
import bootstarp from '../../assets/Image/tech/bootstrap.svg'
import cprogramming from '../../assets/Image/tech/cprogramming.svg'
import css3 from '../../assets/Image/tech/css3.svg'
import html from '../../assets/Image/tech/html.svg'
import jsvsscript from '../../assets/Image/tech/javascript.svg'
import mongodb from '../../assets/Image/tech/mongodb.svg'
import nodejs from '../../assets/Image/tech/nodejs.svg'
import python from '../../assets/Image/tech/python.svg'
import react from '../../assets/Image/tech/react.svg'
import redux from '../../assets/Image/tech/redux.svg'
import sql from '../../assets/Image/tech/sql.svg'
import express from '../../assets/Image/tech/express.svg'
import leetcode from '../../assets/Image/tech/leetcode.png'
import gfg from '../../assets/Image/tech/gfg.svg'
import codechef from '../../assets/Image/tech/codechef.svg'

 


const Experience = () => {
    return <div className='technica_container' id="skills">
        <div className='contact_container transform_effect '>

            <h1>Experience</h1>

            <div className='underline_style_contact'>
                <div style={{ width: '300px' }}><hr /></div></div>

        </div>
        <div className='technical_text ' data-aos="fade-right">
            <div className='datastructure technical_heading'>
                <div className='datast_text_technical transform_effect'>
                    <span>DATA STRUCTURE
                        <div className='underline_style_contact'>
                            <div style={{ width: '170px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>

                </div>
                <div className='datast_text_technical'>

                    <div className='bulletpoint'></div>
                    <a href='https://leetcode.com/Amitverma_12345/'target='_blank'>
                    <span >Leetcode  <img  style={{width:'28px'}}src={leetcode} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a href='https://auth.geeksforgeeks.org/user/tuseday013/'target='_blank'>
                    <span>Geek For Geeks <img src={gfg} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a href='https://www.codechef.com/users/amit7497925101'target='_blank'>
                    <span>Code Chef <img src={codechef} /></span>
                    </a>
                </div>
            </div>
            <div className='programming technical_heading'>

                <div className='datast_text_technical transform_effect'>
                    <span>PROGRAMMING LANGUAGE
                        <div className='underline_style_contact'>
                            <div style={{ width: '255px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>

                    <div className='bulletpoint'></div>
                    <a>
                    <span>Java (core) <img src={java} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>C Language <img src={cprogramming} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Python <img src={python} /></span>
                    </a>
                </div>
            </div>
            <div className='webtechnology technical_heading'>

                <div className='datast_text_technical transform_effect'>
                    <span>WEB TECHNOLOGY
                        <div className='underline_style_contact'>
                            <div style={{ width: '165px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Html5 <img src={html} /></span></a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Css3 <img src={css3} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Bootstrap <img src={bootstarp} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Javascript <img src={jsvsscript} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>React <img src={react} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Redux <img src={redux} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Node <img src={nodejs} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Express <img src={express} /></span>
                    </a>
                </div>


            </div>
            <div className='database technical_heading'>
                <div className='datast_text_technical transform_effect'>
                    <span>DATABASE
                        <div className='underline_style_contact'>
                            <div style={{ width: '130px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span>Mongodb <img src={mongodb} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a>
                    <span className='tech_name'>My Sql <img src={sql} /></span>
                    </a>
                </div>
            </div>

        </div>


    </div>
}

export default Experience