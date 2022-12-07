import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "hoidanit",
    age: '',
  };

  handleClick(e) {
    // Merge class
    this.setState({
      age: `${Math.floor(Math.random() * 100 + 1)}`,
      name: "Eric",
    });
  }

  handleOnChangeInputName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleOnChangeInputAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.handleAddNewUser(
        {
          id: Math.floor(Math.random() * 100 + 1) + "random",
          name: this.state.name,
          age: this.state.age,
        }
    );
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and i {this.state.age}
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <label>Your name:</label>
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChangeInputName(e);
            }}
          />
          <label>Your age:</label>
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChangeInputAge(e);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
