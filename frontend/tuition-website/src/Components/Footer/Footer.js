import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import TuitionLogo from '../../assets/TuitionLogo.png';

function Footer() {
    return (
<div className="footer">
            <div className="footer__wrap">
                <div className="footer__socailMedia">
                    {/* Logo */}
                    <img src={TuitionLogo} alt="Tuition Logo" />
                    {/* SocialMedia icons */}

                    <p>Let us do all the hard wrok well you enjoy the rewards!</p>

                    <div className="footer__socialMediaIcon">
                        <h4>Follow Us</h4>

                            <InstagramIcon className="footer_icon"/>
                            <FacebookIcon className="footer_icon"/>
                            <LinkedInIcon className="footer_icon"/>
                            <TwitterIcon className="footer_icon"/>
                    </div>

                </div>

                <div className="footer__policys">
                    <h4>Policies</h4>

                    <ul>
                        <li><Link to="/Policy/TermsOfService">Terms of Services</Link></li>
                        <li><Link to="/Policy/Privacy">Private Poliicy</Link></li> 
                    </ul>
                </div>

                <div className="footer__contactUs">
                    <h4>Contact Us</h4>
                    
                    <ul>
                        <Link to="/contact">
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
