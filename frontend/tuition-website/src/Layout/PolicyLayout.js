import React from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function PolicyLayout(props) {
    const history = useHistory();

    const policyLayout = {
        backgroundColor: 'lightGray',
    }

    const backContainer = {
        width: '100%',
        display: 'flex',
        // backgroundColor: '#333'
    }

    const Arrowstyles = {
        paddingTop: '7px',
        marginLeft: '5px',
        fontSize: '1.6rem',
        cursor: 'pointer'
    }

    const BackSpanStyles = {
        fontSize: '1rem',
        lineHeight: '40px',
        cursor: 'pointer',
        color: 'black',
    }
    return (
        <div style={policyLayout}>
            <div style={backContainer} onClick={() => history.goBack()} >
                <ArrowBackIcon  style={Arrowstyles} /> 
                <span style={BackSpanStyles}>Back</span>
            </div>

            <div className="policyLayout">
                {props.children}
            </div>
        </div>
    )
}

export default PolicyLayout
