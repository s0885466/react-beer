import React from 'react';
import './Error.css';
import iconError from './error.png';

const Error = () => {
    return (
        <div className="Error">
            <img src={iconError} alt="iconError"/>
        </div>
    );
};

export default Error;