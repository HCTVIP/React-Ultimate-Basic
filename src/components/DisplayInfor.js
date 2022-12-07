/* eslint-disable array-callback-return */
import React from "react";
import './DisplayInfor.scss'

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
    // pops => viet tat properties
    return (
      <div className="display-infor-container">
        <span onClick={() => {this.handleShowHide()}}>{this.state.show === true ? 'Hide' : 'Show'} list User:</span>
        {listUsers.map((user) => {
            return (
              <div key={user.id}>
                {this.state.show && 
                <div  className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's{user.name}</div>
                  <div>My age's{user.age}</div>
                  <hr/>
                </div>}
              </div>
            );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
