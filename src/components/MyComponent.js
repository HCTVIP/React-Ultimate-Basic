// class component and function component
import React, {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   // JSX cho phép viết code java script bên trong code của HTML
//   // DRY: don't repeat yourself
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "hoi dan IT",
//         age: 15,
//       },
//       {
//         id: 2,
//         name: "Eric",
//         age: 20,
//       },
//       {
//         id: 3,
//         name: "Harry Pham Dev",
//         age: 30,
//       },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//       this.setState({
//         listUsers: [userObj, ...this.state.listUsers]
//       })
//   }

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter(item => 
//       item.id !== userId
//     );
//     this.setState({
//       listUsers:listUsersClone
//     });
//   }

//   render() {
//     return (
//       <>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
//       </>
//     );
//   }
// }

const MyComponent = (props) => {

  const [listUsers, setListUser] = useState([
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
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([...listUsers, userObj])
    
    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers]
    // })
}

   const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter(item => 
      item.id !== userId
    );
    setListUser(listUsersClone);
  }

  return (
      <>
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
      </>
  )
}



export default MyComponent;
