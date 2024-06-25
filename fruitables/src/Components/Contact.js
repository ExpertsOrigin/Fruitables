import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <>
            <section class="header">
                <h1 class="headerh1">Contact</h1>
                <p id="headerp"><a href="#">Home /</a><a href="#"> Pages /</a> Contact</p>
            </section>


            <div className="getintouch">
                <h1 className="touchh1">Get in touch</h1>
                <p className="touchp">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                <a href="https://htmlcodex.com/contact-form/">Download Now</a>

                <img src="./images/contactmap.png" alt="" />

                <div className="contactform">
                    <div className="message">
                        <input type="text" placeholder='Your Name'/>
                        <input type="text" placeholder='Enter Your Email'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button className="submit">Submit</button>
                    </div>
                    <div className="contactaddress">
                        <div className="address"><i class="fa-solid fa-location-dot"></i> Address &nbsp;<br /><br />&nbsp; &nbsp; &nbsp;123 Street New York.USA</div>
                        <div className="mail"><i class="fa-solid fa-envelope"></i> Mail Us &nbsp;<br /> <br />&nbsp; &nbsp; &nbsp;info@example.com</div>
                        <div className="telephone"><i class="fa-solid fa-phone"></i> Telephone &nbsp;<br /><br />&nbsp; &nbsp; &nbsp;(+012)34567 8910</div>

                    </div>
                </div>
            </div>




        </>
    )
}
