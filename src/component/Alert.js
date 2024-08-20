import React, { useEffect, useState } from 'react';

function Alert(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // Alert will disappear after 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  if (!visible) {
    return null; // Don't render anything if the alert is not visible
  }

  return (
    <div className="alert alert-warning" role="alert">
      {props.message}
    </div>
  );
}

export default Alert;
