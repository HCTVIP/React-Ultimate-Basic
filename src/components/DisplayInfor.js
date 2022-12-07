/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';


const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true)

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser)
  }
  console.log("call me render 1")


  useEffect (() => {
    if(listUsers.length === 0) {
      alert("Please select")
    }
  },[listUsers])
  

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
