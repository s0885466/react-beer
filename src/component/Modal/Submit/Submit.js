import React from 'react';
import './Submit.css';

const Submit = (props) => {
    const {
        submitClick,
        disabled,
        messageBlock
    } = props;
    return (
        <div>
            <button className="submit"
                    onClick={submitClick}
                    disabled={disabled}>Отправить
            </button>
            {messageBlock}
        </div>
    );
};

export default Submit;