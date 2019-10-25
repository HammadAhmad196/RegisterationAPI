import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneno: "",
    gender: "",
    birthdate: ""
  };
  setFirstName = e => {
    this.setState({
      firstname: e.target.value
    });
  };
  setLastName = e => {
    this.setState({
      lastname: e.target.value
    });
  };
  setEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  setPassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  setPhoneNo = e => {
    this.setState({
      phoneno: e.target.value
    });
  };
  setGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  onGenderChange = str => {
    this.setState({
      gender: str
    });
  };
  register = () => {
    alert(`FirstName: ${this.state.firstname}\n
    LastName: ${this.state.lastname}\n
    Password: ${this.state.password}\n
    Email: ${this.state.email}\n
    Gender: ${this.state.gender}`);
  };
  render() {
    return (
      <div className="App">
        <h3>Register</h3>
        <form>
          <input
            onChange={event => this.setFirstName(event)}
            style={{
              margin: 15,
              padding: 5,
              width: 334
            }}
            type="text"
            name="firstname"
            value={this.state.firstname}
            placeholder="FirstName"
          />
          <br />
          <input
            onChange={event => this.setLastName(event)}
            style={{
              padding: 5,
              width: 334
            }}
            type="text"
            name="lastname"
            value={this.state.lastname}
            placeholder="LastName"
          />
          <br />
          <input
            onChange={event => this.setEmail(event)}
            style={{
              margin: 14,
              width: 334,
              padding: 5
            }}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
          />
          <br />
          <input
            onChange={event => this.setPassword(event)}
            style={{
              width: 332,
              padding: 5
            }}
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
          <br />
          <input
            onChange={event => this.setPhoneNo(event)}
            style={{
              margin: 15,
              width: 332,
              padding: 5
            }}
            type="text"
            name="phoneno"
            value={this.state.phoneno}
            placeholder="PhoneNo"
          />
          <br />
          <h3>Gender</h3>
          <input
            type="radio"
            name="gender"
            value="this.state.male"
            onChange={() => {
              this.onGenderChange("Male");
            }}
          />
          Male&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="this.state.female"
            onChange={() => {
              this.onGenderChange("Female");
            }}
          />
          Female&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="this.state.other"
            onChange={() => {
              this.onGenderChange("Other");
            }}
          />
          Other
          <br />
          <br />
          <h3>Birthdate</h3>
          Day
          <select name="DOBDay">
            <option value="{}">1</option>
            <option value="{}">2</option>
            <option value="{}">3</option>
            <option value="{}">4</option>
            <option value="{}">5</option>
          </select>
          &nbsp; Year
          <select name="DOBYear">
            <option value="{}">1996</option>
            <option value="{}">1997</option>
            <option value="{}">1998</option>
            <option value="{}">1999</option>
            <option value="{}">2000</option>
          </select>
          &nbsp; Month
          <select name="DOBMonth">
            <option value="{}">January</option>
            <option value="{}">February</option>
            <option value="{}">March</option>
            <option value="{}">April</option>
            <option value="{}">May</option>
          </select>
          &nbsp;
          <br />
          <br />
          <button
            style={{
              margin: 15,
              color: "green",
              width: 334,
              padding: 5
            }}
            onClick={this.register}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
