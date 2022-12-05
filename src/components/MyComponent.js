// class component and function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HaryPhamDev",
    address: "hoidanit",
    age: 26,
  };

  // JSX cho phép viết code java script bên trong code của HTML
  render() {
    return (
      <div>
        My name is {this.state.name} and i from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
