/* eslint-disable array-callback-return */
import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
  state = {
    show: true,
  }
  handleShowHide() {
    this.setState({
      show: !this.state.show
    })
  }
  
  render() {
    const { listUsers } = this.props;
    // props => viet tat properties
    return (
      <div className="display-infor-container">
        <img src={logo} className='img'/>
        <span onClick={() => {this.handleShowHide()}}>{this.state.show === true ? 'Hide' : 'Show'} list User:</span>
        {this.state.show && 
          <>
            {listUsers.map((user) => {
                return (
                  <div key={user.id}>
                    <div  className={+user.age > 18 ? "green" : "red"}>
                      <div>My name's{user.name}</div>
                      <div>My age's{user.age}</div>
                      <hr/>
                    </div>
                  </div>
                );
            })}
          </>
        }
      </div>
    );
  }
}

export default DisplayInfor;
