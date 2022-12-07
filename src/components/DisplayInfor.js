/* eslint-disable array-callback-return */
import React from "react";

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
    console.log(this.props.listUsers);
    const { listUsers } = this.props;
    // pops => viet tat properties
    return (
      <div>
              <div>
                <span onClick={() => {this.handleShowHide()}}>{this.state.show === true ? 'Hide' : 'Show'} list User:</span>
              </div>
        {listUsers.map((user) => {
            return (
              <>
              {this.state.show && <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name's{user.name}</div>
                <div>My age's{user.age}</div>
                <hr/>
              </div>}
              </>
            );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
