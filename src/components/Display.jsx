import React, { Component } from "react";
import Input from "./InputField";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {Display.this.props.map((InputField) => (
          <Input onClick={this.props.handleClick("hello")} />
        ))}
      </div>
    );
  }
}

export default Display;
