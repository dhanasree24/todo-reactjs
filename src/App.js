import React, { Component } from "react";
import Input from "./components/InputField";
import Display from "./components/Display";
import "./App.css";
class App extends React.Component {
  state = {
    Notes: [],
  };

  constructor() {
    super();
  }

  handleChange = (a) => {
    //Updating inputfield component state
    //console.log(a);
    //this.setState({ Notes: [...this.state.Notes, a] });
    this.state.Notes.push(a);
    console.log(this.state.Notes);
  };

  render() {
    return (
      <div className="App">
        <Input handleClick={this.handleChange} />
        <Display />
      </div>
    );
  }
}

export default App;
