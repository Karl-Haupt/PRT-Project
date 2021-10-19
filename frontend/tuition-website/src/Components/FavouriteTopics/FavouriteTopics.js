import React, { useEffect, Fragment } from 'react';
import './FavouriteTopics.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { favouriteTopics, clearErrors } from '../../Redux/Actions/userActions';

const FavouriteTopics = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history = useHistory();

    let arrayOfTopics = [];

    const { loading, favouriteTopics: favTopic, error } = useSelector(state => state.auth);

    const favTopics = [
        'Git',
        'GitHub',
        'Advanced Java',
        'Agile practice',
        'Python',
        'React.js',
        'Kotlin',
        'Mobile programming',
        'Scala prgramming',
        'Artificial Intelligence',
        'Web Development'
    ];


    const userFav = (e) => {
        e.preventDefault();
        dispatch(favouriteTopics(arrayOfTopics))
    }

    const userTopics = (topic) => {
        console.log(arrayOfTopics);
        const index = arrayOfTopics.indexOf(topic);
        if (index > -1) {
            arrayOfTopics.splice(index, 1);
        } else {
            arrayOfTopics.push(topic);
        }
    };

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

export default FavouriteTopics
{/* <div className="package">
<form>
    {favTopics.map(topic => (
        <Fragment key={topic}>
          <input 
            type="checkbox"
            className="ml-5"
            id={topic}
            name={topic}
            value={topic}
            
            onClick={e => userTopics(topic)}
           />
          <label htmlFor={topic}>{topic}</label>
          <br />
        </Fragment>
    ))}

    <button onClick={userFav}>Submit</button>
</form>
</div> */}
