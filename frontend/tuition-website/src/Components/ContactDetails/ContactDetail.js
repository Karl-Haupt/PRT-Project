import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactDetail.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function ContactDetail() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [extraInformation, setExtraInformation] = useState('');

    return (
        <div className="contactDetail">

        {/* Contact information */}
        <div className="contactDetail__container">
            <div className="contactDetail__information">
                <h2>Contact Us</h2>

                <p>If you have a inquiry or just want to talk. Let Us Known</p>


                <div className="contactDetail__socialMedia">
                    
                    <span>Keep in Touch</span>

                        <Link to="/">
                            <InstagramIcon className="contactDetail__icon"/>
                        </Link>

                        <Link to="/">
                            <FacebookIcon className="contactDetail__icon"/>
                        </Link>

                        <Link to="/">
                            <LinkedInIcon className="contactDetail__icon"/>
                        </Link>

                        <Link to="/">
                            <TwitterIcon className="contactDetail__icon"/>
                        </Link>
                </div>
            </div>

            {/* Contact form */}
            <div className="contactDetail__form">
                
                <h2>Have Questions?</h2>
                
                <form>
                    {/* Name, email, phone number, type of website, upload files, extra information */}
                    <input type="text" name="name" placeholder="First Name" value={name} required onChange={e => setName(e.target.value)} />

                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} required onChange={e => setLastName(e.target.value)} />

                    <input type="text" name="email" placeholder="Email Address" value={email} required onChange={e => setEmail(e.target.value)} />
                                            
                    <textarea name="extraInformation" placeholder="Extra Information" value={extraInformation} required  onChange={e => setExtraInformation(e.target.value)} />
                
                    <button type="submit">Send Message</button>
                </form>

            </div>
        </div>
    </div>
    )
}

export default ContactDetail;
