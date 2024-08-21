import React from 'react';

function Alert(props) {


  return (
    <div className="alert alert-warning" role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
