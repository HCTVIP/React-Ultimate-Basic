import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "HaryPhamDev",
    address: "hoidanit",
    age: 26,
  };

  handleClick(e) {
    // Merge class
    this.setState({
      age: `${Math.floor(Math.random() * 100 + 1)}`,
      name: "Eric",
    });
  }

  handleOnChangeInput(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeValue(e) {
    e.preventDefault();
    alert("me");
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and i {this.state.age}
        <form
          onSubmit={(e) => {
            this.handleChangeValue(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
