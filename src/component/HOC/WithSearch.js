import React from 'react';
const WithSearch = (WrappedComponent, newProps) => {
    return (props) => {
        return (
            <WrappedComponent {...props} {...newProps}/>
        )
    };
};

export default WithSearch;

