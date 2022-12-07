import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props.listUsers);
    // pops => viet tat properties
    return (
      <div>
        {this.props.listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's{user.name}</div>
              <div>My age's{user.age}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
