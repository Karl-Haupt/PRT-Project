import React from 'react';
import './FavouriteTopics.css';

const FavouriteTopics = () => {
    return (
        <div id="topics">
            <div id="header">
            <h1 id="title">FavoriteTopics</h1>
            <b><p id="description">Let us know </p></b>
            </div>
            <form id="favorite topics">
                <div id="contact-info">
                    <div id="name-info">
                        <b><label id="name-label" htmlFor="name">Name:</label></b>
                        <input type="text" id="name" name="name" required placeholder="Input name"/>
                    </div>
                </div>
            <div id="Dropdown-box">
                <b><label>Select the option which adapts to your Membership</label></b>
                <select id="dropdown">
                <option>Standard membership</option>
                <option>Premium subscription</option>
                </select>       
            </div>
            <br/>
            <div id="radio-question">
                <div>
                    <b><label>Select the option which adapts to your situation:</label></b>       
                </div>
                <div>
                <ol style={"list-style: none;"}>
                    <li><input type="radio" name="level" value="bajo"/>Student</li>
                    <li><input type="radio" name="level" value="medio"/>Teacher</li>         
                </ol>
                </div>  
            </div>
            <div id="checkbox-question">
                <div>
                    <b><label>Select your favorite topics:</label></b>
                </div>
                <div>
                    <ul style={"list-style: none"}>
                        <li>
                            <input type="checkbox" name="classes" value="1" />Git
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="2"/>Github
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="3"/>Advanced Java
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="4"/>Agile practice
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="5"/>Python
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="6"/>React.js
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="7"/>Mobile programming
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="8"/>Scala programming
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="9"/>Artifical intelligence
                        </li>
                        <li>
                            <input type="checkbox" name="classes" value="10"/>Web Development
                        </li>
                    </ul>
                </div>
            </div>
            <div id="text-area">
                <div>
                <label>
                    <b><p>Send us any suggestion on how to improve our website and courses (Optional)</p></b>
                </label>
                </div>
                <div>
                    <textarea placeholder="Add suggestions here "></textarea>
                </div>
            </div>
            
            <br />
            
            <button id="submit" type="submit">Submit</button>            

            </form>
        </div>
    )
}


