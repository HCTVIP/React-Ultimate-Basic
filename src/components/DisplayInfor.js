/* eslint-disable array-callback-return */
import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg';


// stateless vs statefull
// class DisplayInfor extends React.Component {
//   render() {
//     console.log('call me render')
//     const { listUsers } = this.props;
//     // props => viet tat properties
//     return (
//       <div className="display-infor-container">
//         {true && 
//           <>
//             {listUsers.map((user) => {
//                 return (
//                   <div key={user.id}>
//                     <div  className={+user.age > 18 ? "green" : "red"}>
//                       <div>
//                         <div>My name's{user.name}</div>
//                         <div>My age's{user.age}</div>
//                       </div>
//                       <div>
//                         <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//             })}
//           </>
//         }
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true)

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser)
  }

    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? 'HideListUser' : 'ShowListUser'}</span>
        </div>
        {isShowHideListUser && 
          <>
            {listUsers.map((user) => {
                return (
                  <div key={user.id}>
                    <div  className={+user.age > 18 ? "green" : "red"}>
                      <div>
                        <div>My name's{user.name}</div>
                        <div>My age's{user.age}</div>
                      </div>
                      <div>
                        <button onClick={() => {props.handleDeleteUser(user.id)}}>Delete</button>
                      </div>
                    </div>
                  </div>
                );
            })}
          </>
        }
      </div>
    );
}



export default DisplayInfor;
