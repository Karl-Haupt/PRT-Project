import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Course({ courseName }) {
    return (
        <div className="course">

            <br />

            <Link to={`/courses/${courseName}`}>{courseName}</Link>
            
            <br />
                <Link to={`/courses/${courseName}`}>
                    <ArrowForwardIcon className="course__arrow"/>
                </Link>
            <br />

            <span className="course__info"> 20 Mark Test</span>
            <span className="course__info"> Updated 2021</span>
        </div>
    )
}

export default Course
