import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footertop">
                    <h1 id='footerh1'>Fruitables</h1>
                    
                    <input type="search" placeholder='Your Email'/>
                    <button>Subscribe Now</button>
                    <span>
                        <a href="/"><i class="fa-brands fa-twitter"></i></a>
                        <a href="/"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="/"><i class="fa-brands fa-youtube"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                    </span>
                </div>
                <hr />

                <div className="bottom">
                    <div className="people">
                        <h2 className='myh2'>Why People Like Us!</h2>
                        <p id='footerp'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                        <button>Read more</button>
                    </div>
                    <div className="shopinfo">
                        <h2 className='myh2'>Shop Info</h2>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Return Policy</li>
                        <li>FAQs & Help</li>
                    </div>
                    <div className="account">
                        <h2 className='myh2'>Account</h2>
                        <li>My Account</li>
                        <li>Shop Details</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        <li>Order History</li>
                        <li>International Orders</li>
                    </div>
                    <div className="contact">
                        <h2 className='myh2'>Contact</h2>
                        <li>Address: 1429 Netus Rd, NY 48247</li>
                        <li>Email: Example@gmail.com</li>
                        <li>Phone: +0123 4567 8910</li>
                        <li>Payment Accepted</li>
                        
                        <img src="./images/payment.png" alt="image loading" />
                    </div>
                </div>

                <div className="end">
                    <p id='end1'>&copy; <a href="#">Your Site Name</a>, All right reserved</p>
                    <p id='end2'>Designed By <a href="#">HTML Codex</a> Distributed by <a href="#">ThemeWagon</a></p>
                   </div>
            </div>



        </>
    )
}
