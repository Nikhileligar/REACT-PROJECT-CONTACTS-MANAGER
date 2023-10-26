import React from "react";
import "./App.css";

class AddContact extends React.Component {
  state = {
    name: "",
    phone: 0
  };
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
      this.props.setContacts((prev)=> 
        [
          ...prev,{
            id:Math.random(),
            name:this.state.name,
            phone:this.state.phone}
        ])
  };
  
  render() {
    return (
      <div className="ui main">
        <h2> Add contacts </h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label> name </label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br />
            <br />
            <div className="field">
              <label> phone </label>
              <input
                type="number"
                placeholder="Phone"
                value={this.state.phone}
                onChange={this.handleEmailChange}
              />
            </div>
            <button className="task button"> Add </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
