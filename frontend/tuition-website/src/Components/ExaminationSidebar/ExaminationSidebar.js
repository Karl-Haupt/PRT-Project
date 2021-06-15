import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExaminationSidebar.css';

import Course from '../Courses/Course';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ExaminationSidebar() {
    const [sidebar, setSidebar] = useState(true);
    let sidebarClassname = sidebar ? 'examinationSidebar open' : 'examinationSidebar';

    const toggleSidebar = () => setSidebar(!sidebar);
    
    return (
        <div className={sidebarClassname}>

            <div className="examinationSidebar__backBlock" onClick={toggleSidebar}>
                <span>Hide</span>
                <ArrowForwardIosIcon />
            </div>
            
            
            <div className="examinationSideber__courses">
                <Link to="/courses/Git">
                    <Course courseName="Git" className="examinationSidebar__course"/>
                </Link>

                <Link to="/courses/GitHub">
                    <Course courseName="GitHub" className="examinationSidebar__course"/>
                </Link>

                <Link to="/courses/Test-Driven-Development">
                    <Course courseName="Test-Driven-Development" className="examinationSidebar__course"/>
                </Link>
            </div>
        </div>
    )
}

export default ExaminationSidebar;
