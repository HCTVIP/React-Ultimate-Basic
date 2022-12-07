/* eslint-disable array-callback-return */
import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log('call contructor 1:');
    super(props);
    this.state = {
      show: true,
    }
  }

  componentDidMount(){
    console.log("call me component did mount");
    setTimeout(() => {
      document.title = "Bim Anh"
    },3000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("call me component did Update", this.props, prevProps);
    if(this.props.listUsers !== prevProps.listUsers) {
      if(this.props.listUsers.length === 5) {
        alert("Please dung")
      }
    }
  }

  handleShowHide() {
    this.setState({
      show: !this.state.show
    })
  }
  
  render() {
    console.log('call me render')
    const { listUsers } = this.props;
    // props => viet tat properties
    return (
      <div className="display-infor-container">
        {/* <img src={logo} className='img'/> */}
        <span onClick={() => {this.handleShowHide()}}>{this.state.show === true ? 'Hide' : 'Show'} list User:</span>
        {this.state.show && 
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
                        <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
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
}

export default DisplayInfor;
