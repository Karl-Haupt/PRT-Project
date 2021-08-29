import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Course from './Course';
import { Link } from 'react-router-dom';
import './Courses.css';

import GitHubLogo from '../../assets/GitHubLogo.png';
import GitLogo from '../../assets/GitLogo.png';
import TDDLogo from '../../assets/TDDLogo.png';

function Courses() {
    const alert = useAlert();

    const { user, error } = useSelector(state => state.auth);

    useEffect(() => {
        // if(error) {
        //     alert.error(error);
        // }
    }, [error, user])

    return (
        <div className="courses" >

            <div className="courses__wrap">
                <h2>Courses</h2>

                <div className="courses__container">
                    <Link to="/courses/GitHub">
                        <Course courseName="GitHub"/>
                    </Link>
                        <div className="courses__courseInfo">
                            <img src={GitHubLogo} alt="GitHub Logo" />

                            <p>
                                GitHub is a code hosting platform that enables user to collaborate and use version control like Git. GitHub allows for user to
                                interact and co-operate with code and other developers.
                            </p>
                        </div>

                    <Link to="/courses/Git">
                        <Course courseName="Git"/>
                    </Link>
                        <div className="courses__courseInfo">
                            <img src={GitLogo} alt="Git Logo" />

                                <p>
                                    Git is a version control system meaning that Git track changes in computer files and co-oridnates work on those files 
                                    by a team/person. Git is primarily used for source code management in IT infastructures.
                                </p>
                        </div>

                    {user && user.isPaid && (
                        <Fragment>
                            <Link to="/courses/Test-Driven-Development">
                            <Course courseName="Test-Driven-Development"/>
                            </Link>
                            <div className="courses__courseInfo">
                                    <img src={TDDLogo} alt="Test-Driven Development concept" />

                                    <p>
                                    Test-Driven Development also known as TDD is a method of testing your code in small test cases, allowing for easier debugging
                                    and validation of code. TDD has 3 ativites associated with it coding, testing and reftoring.
                                    </p>
                            </div>
                        </Fragment>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Courses
