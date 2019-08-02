import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const styleProgressBar = {
        width: `${props.percent}%`
    };
    return (
        <div className="progressbar">
            <div style={styleProgressBar}></div>
        </div>
    );
};

export default ProgressBar;