// class component and function component

import React from "react";

class MyComponent extends React.Component {
  // JSX cho phép viết code java script bên trong code của HTML
  render() {
    return <div>{Math.random()}</div>;
  }
}

export default MyComponent;
