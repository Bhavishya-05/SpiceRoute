import React from 'react'
import './Footer.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer pt-sm-0' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={frontend_assets.chilli_logo} className='w-50 h-20' alt="" />
            <p>SpiceRoute is your go-to destination for seamless food delivery, bringing your favorite meals straight to your doorstep. Whether you're craving local delicacies or international flavors, we ensure a fast and delightful dining experience with just a few taps.</p>
        <div className='footer-social-icons'>
            <img src={frontend_assets.facebook_icon} alt="" />
            <img src={frontend_assets.twitter_icon} alt="" />
            <img src={frontend_assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9536954678</li>
                <li>contact@SpiceRoute.com</li>                
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 @ SpiceRoute.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
