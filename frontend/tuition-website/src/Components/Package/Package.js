import React from 'react';
import './Package.css';

function Package() {
    return (
        <div>
            <div className="columns">
            <ul className="price">
                <li className="header">Standard</li>
                <li className="grey"></li>
                    <li>Courses</li>
                    <li>Questions</li>
                    <li>Projects</li>
                    <li>No pdf and powerpoint presentaion</li>
                    <li>No Projects solutions</li>
                    <li>No group study</li>
                    <li>No online video content</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
            </div>



            <div className="columns">
                <ul className="price">
                    <li className="header">Premium</li>
                    <li className="grey"></li>
                    <li>Courses</li>
                    <li>Questions and answers</li>
                    <li>Direct Messages</li>
                    <li>pdf and powerpoint presentaion</li>
                    <li>Projects and solutions</li>
                    <li>group study</li>
                    <li>online video content </li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Package