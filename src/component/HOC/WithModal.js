import React from 'react';

const WithModal = (WrappedComponent, newProps) => {
    return (props) => (
        <WrappedComponent {...props} {...newProps}/>
    )
};

export default WithModal;