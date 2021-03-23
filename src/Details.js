import React from "react";

const Details = (props) => {
  return (
    // Great way to see all props that are coming in from router in the browser
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
