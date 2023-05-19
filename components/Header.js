import React from 'react'

import logo from './logo.png'

import Learn from './Learn'
import HowItWorks from './HowItWorks'
import {Outlet, Link } from 'react-router-dom';
import './Header.css';
 import { Accordion, AccordionItem, Accorion, AccorionItem} from '@szhsin/react-accordion'
import {useState, useEffect} from 'react';


function Header(){
    const [selected, setSelected] = useState(null)
    const toggle = (i)=>{
        if(selected===i){
            return  setSelected(null)
        }
        setSelected(i)
    }
  return (
    <body>
    <div >
        <div className="header-section">
            <div className="inner">
                <div className="logo">
                    <img src={logo} alt=""id='logo'/>
                </div>
                <div className="components">
                    <ul>
                  
                   <Link to="/learn">About us</Link>
                   <Link to="/howitworks">Contact us</Link>
                  
                   </ul>
                  <Outlet/>
                </div>
                <div className="buttons">
                    
                    <div className="btn1"><button id='btn1'>Explore</button></div>
                   
                </div>
            </div>
            
        </div>
        

        {/* --------------Center Section----------------------- */}

        <div className="center-section-main">
            <div className="center-inner-section">
                <h1>What would you like to create?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis .</p>

                <div className="inner-section-input">
                    <div className="center-input">
                        <input type="text" />
                    </div>
                    <div className="center-search-button">
                        <button className='center-button'>Search</button>
                    </div>
                </div>


            </div>
        </div>



        {/* ---------------------------Contact us------------------------------------- */}

        {/* <div className="contact-us">
            <div className="contact-container">
                <h3 className="contact-heading">CONTACT US</h3>
                <h2>Ready to get that dream job?</h2>
                <div className="form">
                    <div className="form-content">
                    <form action="#">
                        <p>Sir tight! Our experts will get back to you within 24 hrs</p>
                        <input type="text" className='input-field' placeholder='Name'/>
                        <input type="text" className='input-field text2' placeholder='Mobile Number'/>
                        <input type="text" className='input-field text3' placeholder='Email ID' />
                        <br />
                        <button className="contact-btn">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div> */}


        {/* ------------------------FAQ SECTION------------------------------ */}
    
        
        {/* <div className="faq">
            <div className="faq-content">
            <h2 className="faq-title">FREQUENTLY ASKED QUESTION</h2>
            <h2 className='title-content'>Read more to know more  </h2>
            </div>
            
            <div className="wrapper">
                <div className="accordion">
                   {data.map((item, i)=>(
                    <div className="item">
                        <div className="title" onClick={()=>toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected===i ? '-': '+'}</span>
                        </div>
                        <div className={selected==i ?'content show': 'content'}>
                            {item.answere}
                        </div>
                    </div>
                   ))}
                </div> 
            </div>
        </div> */}
        

        
    </div>
    </body>
  )
}
// const data =[
//     {
//         question: "What is the difference between Tracks and Courses?",
//         answere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corrupti quasi itaque. Dolorem possimus necessitatibus fuga cumque facilis amet pariatur ex laudantium est? Illo beatae officiis labore voluptatibus necessitatibus nobis delectus dolores eum quo soluta id inventore, nisi quas nemo atque illum repellendus temporibus in!'
//     },
//     {
//         question: "Can you elaborate on the employment assistance that i will receive?",
//         answere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corrupti quasi itaque. Dolorem possimus necessitatibus fuga cumque facilis amet pariatur ex laudantium est? Illo beatae officiis labore voluptatibus necessitatibus nobis delectus dolores eum quo soluta id inventore, nisi quas nemo atque illum repellendus temporibus in!'
//     },
//     {
//         question: "What is the mode of Teaching ",
//         answere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corrupti quasi itaque. Dolorem possimus necessitatibus fuga cumque facilis amet pariatur ex laudantium est? Illo beatae officiis labore voluptatibus necessitatibus nobis delectus dolores eum quo soluta id inventore, nisi quas nemo atque illum repellendus temporibus in!'
//     },
    
//         {
//             question: "Will i receive a certificate for completion of the course/Track?",
//             answere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corrupti quasi itaque. Dolorem possimus necessitatibus fuga cumque facilis amet pariatur ex laudantium est? Illo beatae officiis labore voluptatibus necessitatibus nobis delectus dolores eum quo soluta id inventore, nisi quas nemo atque illum repellendus temporibus in!'
//         },
//         {
//             question: "Will i get lifetime access to the content?",
//             answere: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corrupti quasi itaque. Dolorem possimus necessitatibus fuga cumque facilis amet pariatur ex laudantium est? Illo beatae officiis labore voluptatibus necessitatibus nobis delectus dolores eum quo soluta id inventore, nisi quas nemo atque illum repellendus temporibus in!'
//         }
    


// ]

export default Header