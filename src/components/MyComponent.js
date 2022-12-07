// class component and function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  // JSX cho phép viết code java script bên trong code của HTML
  // DRY: don't repeat yourself
  state = {
    listUsers: [
      {
        id: 1,
        name: "hoi dan IT",
        age: 15,
      },
      {
        id: 2,
        name: "Eric",
        age: 20,
      },
      {
        id: 3,
        name: "Harry Pham Dev",
        age: 30,
      },
    ],
  };
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponent;
