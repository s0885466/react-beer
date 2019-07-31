import React from 'react';

const WithHeader = (WrappedComponent, newProps) => {
  return (props) => (
      <WrappedComponent {...props} {...newProps}/>
  )
};

export default WithHeader;