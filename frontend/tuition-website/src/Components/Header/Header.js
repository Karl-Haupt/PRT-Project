import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../Redux/Actions/userActions';

function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    const alert = useAlert();
    const [activeMenu, setActiveMenu] = useState(false);

    const { user, loading } = useSelector(state => state.auth);

    useEffect(() => {
        setActiveMenu(false);
    }, [location])

    const logoutHandler = () => {
        dispatch(logout());
        alert.success("Logged out successfully");
    }

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <img src="./assets/TuitionLogo.png" alt="Tuition Logo" />
                </div>

                <div className={`header__navigation ${activeMenu ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                            {user ? (
                                <Fragment>
                                    <li>
                                        <Link to="/payment">
                                            Upgrade
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={logoutHandler}>
                                            Logout
                                        </Link>
                                    </li>
                                </Fragment>
                            ) :(
                                <li>
                                    <Link to="/login">
                                        Login
                                        {/* <i class="fas fa-user-circle"></i> */}
                                    </Link>
                                </li>
                            )}
                    </ul>
                </div>

                {/* <ul>
                    <li className="header__mobileMenu">
                        <span onClick={() => setActiveMenu(!activeMenu)}>
                            <i className="fas fa-bars"></i>
                        </span>
                    </li> 
                </ul> */}

            </div>

        </header>
    )
}

export default Header
