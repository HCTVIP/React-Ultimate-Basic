// class component and function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  // JSX cho phép viết code java script bên trong code của HTML
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name='hoi dan it' age='30' />
        <hr/>
        <DisplayInfor name='Eric' age='26' />
      </div>
    );
  }
}

export default MyComponent;
