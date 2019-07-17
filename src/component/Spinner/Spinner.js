import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="half-circle-spinner">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
        </div>
    );
};

export default Spinner;