import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo" src={assets.logo} alt="" />
                <p>Choose from a diverse nenu faturing a delectable array of dishes with the finest ingredient and culinary expertise. our delicios mal at a time</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GWT IN TOUCH</h2>
                <ul>
                    <li>+94 71 289 4733</li>
                    <li>eatsnowcontact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-right'> Copyright 2026 © EatsNow.com - Al Right Reserved.</p>
    </div>
  )
}

export default Footer
