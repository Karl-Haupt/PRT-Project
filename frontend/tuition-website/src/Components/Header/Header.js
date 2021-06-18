import React, { useEffect, useState } from 'react';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';
import TuitionLogo from '../../assets/TuitionLogo.png';

function Header() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        setActiveMenu(false);
    }, [location])

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
                        <li>
                            <Link to="/login">
                                Login
                                {/* <i class="fas fa-user-circle"></i> */}
                            </Link>
                        </li>

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
