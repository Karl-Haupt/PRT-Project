import React from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

import { Helmet } from 'react-helmet';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function SignIn() {
    const history = useHistory();

    const signIn = async () => { 
        const loginForm = document.querySelector("form.login");
        const loginText = document.querySelector(".titles .Login");
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    }

    const login = () => { 
        const loginForm = document.querySelector("form.login");
        const loginText = document.querySelector(".titles .Login");
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    }

    const signLink = () => { 
        const signUpBtn = document.querySelector("label.signUp");

        signUpBtn.click();
        return false;
    }

    return (
        <section>
            <div className="signIn__backArrow" onClick={() => history.goBack()}>
                <ArrowBackIcon className="signIn__arrow"/>
                <span>Back</span>
            </div>

            <div className="signIn">
                <div class="Wrapper">
                    <div class="titles">
                        <div class="title Login">Login</div>
                        <div class="title SignUp">Sign Up</div>
                    </div>

                    <div class="form-container">
                        <div class="slidecontrols">
                            <input type="radio" name="slider" id="login" checked />
                            <input type="radio" name="slider" id="signUp" />
                            <label for="login" class="slide login" onClick={login}>Login</label>
                            <label for="signUp" class="slide signUp" onClick={signIn}>Sign Up</label>
                            <div class="slide-tab"></div>
                        </div>

                        <div class="inner-form">
                            <form action="#" class="login" method="GET">
                                <div class="field">
                                    <input type="text" placeholder="Email Address" class="email" required />
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" class="password" required />
                                </div>
                                <div class="field">
                                    <input type="submit" value="Login" class="submit" />
                                </div>
                                <div class="signUp-Link">Not Registered? <a href="#" onClick={signLink} >Sign Up</a></div>
                                <div class="error"></div>
                            </form>

                            <form action="#" class="signUp" method="POST" >
                                <div class="field">
                                    <input type="text" placeholder="First Name" required />
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Surname" required />
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Email Address" required />
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Confirm Password" required />
                                </div>
                                <div class="field">
                                    <a href="#"><input type="submit" value="Sign Up" class="submit"/></a>
                                </div>
                                <div class="error"></div>
                            </form>
                        </div>
                        
                </div>
            </div>
        </div>
    </section>
    )
}


export default SignIn;
