// class component and function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HaryPhamDev",
    address: "hoidanit",
    age: 26,
  };

  handleClick(e) {
    console.log(e.clientX);
  }
  handleMouseOver(e) {
    console.log(e.clientY);
  }
  // JSX cho phép viết code java script bên trong code của HTML
  render() {
    return (
      <div>
        My name is {this.state.name} and i from {this.state.address}
        <button onClick={this.handleClick}>Click me!</button>
        <button onMouseOver={this.handleMouseOver}>Click me!</button>
      </div>
    );
  }
}

export default MyComponent;
