import React, { useEffect, useState, Fragment} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import './SignIn.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { register, login, clearErrors } from '../../Redux/Actions/userActions';


//Test password = 123456789
function SignIn() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    //Login
    
    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            console.log(emailAddress);
            console.log(firstName);
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    //Sign-up / Register
    // const [user, setUser] = useState({
    //     firstName: '',
    //     secondName: '',
    //     emailAddress: '',
    //     userPassword: '',
    // })

    // const { name: firstName, surname: secondName, email: emailAddress, password: userPassword } = user;

    // const onChange = e => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // }

    const registerHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', firstName);
        formData.set('surname', surname)
        formData.set('email', emailAddress);
        formData.set('password', userPassword);

        dispatch(register(formData))
    }

    const signInStyles = async () => { 
        const loginForm = document.querySelector("form.login");
        const loginText = document.querySelector(".titles .Login");
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    }

    const loginSyles = () => { 
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

            {/* Sign In */}
            <div className="signIn">
                <div className="Wrapper">
                    <div className="titles">
                        <div className="title Login">Login</div>
                        <div className="title SignUp">Sign Up</div>
                    </div>

                    <div className="form-container">
                        <div className="slidecontrols">
                            <input type="radio" name="slider" id="login" checked readOnly/>
                            <input type="radio" name="slider" id="signUp" readOnly/>
                            <label htmlFor="login" className="slide login" onClick={loginSyles}>Login</label>
                            <label htmlFor="signUp" className="slide signUp" onClick={signInStyles}>Sign Up</label>
                            <div className="slide-tab"></div>
                        </div>

                        <div className="inner-form">
                            <form className="login" onSubmit={loginHandler}>
                                <div className="field">
                                    <input 
                                        type="text" 
                                        placeholder="Email Address" 
                                        className="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div className="field">
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required />
                                </div>
                                <div className="field">
                                    <input type="submit" value="Login" className="submit" />
                                </div>
                                <div className="signUp-Link">Not Registered? <a href="#" onClick={signLink} >Sign Up</a></div>
                                <div className="error"></div>
                            </form>

                        {/* Sign Up/Register */}
                            <form className="signUp" onSubmit={registerHandler} >
                                <div className="field">
                                    <input 
                                    type="text"
                                    id="name"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    required />
                                </div>
                                <div className="field">
                                    <input 
                                    type="text" 
                                    id="surname"
                                    placeholder="Surname" 
                                    value={surname}
                                    onChange={e => setSurname(e.target.value)}
                                    required />
                                </div>
                                <div className="field">
                                    <input 
                                    type="text" 
                                    id="email"
                                    placeholder="Email Address" 
                                    value={emailAddress}
                                    onChange={e => setEmailAddress(e.target.value)}
                                    required />
                                </div>
                                <div className="field">
                                    <input 
                                    type="password" 
                                    id="password"
                                    placeholder="Password" 
                                    value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)}
                                    required />
                                </div>
                                <div className="field">
                                    <a href="#">
                                        <input 
                                            type="submit" 
                                            value="Sign Up" 
                                            className="submit"/>
                                    </a>
                                </div>
                                <div className="error"></div>
                            </form>
                        </div>
                        
                </div>
            </div>
        </div>
    </section>
    )
}


export default SignIn;
