import React from 'react'
import './ContactUsSection.css'


const ContactUsSection = () => {
  return (
   <section className="ContactUsSection-main-div">
    <div className="ContactUsSection-Inner">

        <div className="ContactUsSection-left-div">
            <div className="ContactUsSection-left-content">
                <h3>Benefits</h3>
                <p>You will get a call between 9am - 9pm</p>
                <div className="dropdownlist-contactus">
                    <div className="icon-contactus"><i className='fa fa-check'></i></div>
                    <div className="icon-contactus-Content">We will get back to you in 24 hrs</div>
                </div>


                <div className="dropdownlist-contactus">
                    <div className="icon-contactus"><i className='fa fa-check'></i></div>
                    <div className="icon-contactus-Content">Latest offers & discounts</div>
                </div>

                <div className="dropdownlist-contactus">
                    <div className="icon-contactus"><i className='fa fa-check'></i></div>
                    <div className="icon-contactus-Content">support@skillAlgo.com for any queries</div>
                </div>
            </div>
            <img src="/assets/images/contact-us-illustration.png" alt="" className='contact-us-image'/>
        </div>


        <div className="ContactUsSection-right-div">
            <div className="Right-inner-content">
            <div className="contact-rigth-side-content"> <h1>Contact Us</h1></div>
            <div className="Contact-right-side-toggle-cross"><i className="fa fa-times" ></i></div>
            </div>


        <div className="ContactUs-input-field">
            <input type="text" placeholder='Name*'/>
            <br />
            <input type="text" placeholder='Mobile Number*'/>
            <br />
            <input type="text" placeholder='Email-id*'/>
        </div>
        <input type="button" className="Contact-us-button" value="Submit" />
        </div>


    </div>
   </section>
  )
}

export default ContactUsSection