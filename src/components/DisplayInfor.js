import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    // pops => viet tat properties
    return (
      <div>
        <div>My name {this.props.name}</div>
        <div>My age's {this.props.age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
