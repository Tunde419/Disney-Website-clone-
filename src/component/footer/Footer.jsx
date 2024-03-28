import React from "react"
import '../footer/Footer.css'

import disnlogo from './images/disneylogo.png'



const Footer= ()=>{
    return(
        <>
             <div className="footer-container">
                <div className="rich-text">
                    <p>
                        Follow Disney on:
                        <span className='social-icons'>
                            <img src="https://lumiere-a.akamaihd.net/v1/images/icon_social_facebook_dark_9d7616bf.svg" alt="facebook" />
                            <img src="https://lumiere-a.akamaihd.net/v1/images/icon_social_instagram_dark_b5f8e532.svg" alt="instagram" />
                            <img src="https://lumiere-a.akamaihd.net/v1/images/twitter_x_logo_ff25ea4d.svg" alt="twitter" />
                            <img src="https://lumiere-a.akamaihd.net/v1/images/icon_social_youtube_dark_6136d901.svg" alt="youtube" />
                        </span>
                    </p>
                </div>
            </div>
            <img src={disnlogo} alt="disney-logo" />
            <ul className='links-list'>
                <li><span>Help</span></li>
                <li><span>Sign Up</span></li>
                <li><span>Sitemap</span></li>
                <li><span>Terms of Use</span></li>
                <li><span>UK & EU Privacy Rights</span></li>
                <li><span>Privacy Policy</span></li>
                <li><span>Cookie Policy</span></li>
                <li><span>Manage Your Cookie Settings</span></li>
                <li><span>Interest-based Ads</span></li>
                <li><span>Tax Strategy Statement</span></li>
                <li><span>Internet Safety</span></li>
                <li><span>About Us</span></li>
                <li><span>The Walt Disney Company</span></li>
            </ul>
            <div id='copyright'>
                © Disney © Disney•Pixar © &amp; ™ Lucasfilm LTD © Marvel. All Rights Reserved
            </div>

        
        </>
    )
}

export default Footer