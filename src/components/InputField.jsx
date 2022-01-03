import react from "react";
import React, { Component } from "react";

class Input extends Component {
  constructor() {
    super();
  }

  state = {
    data: " ",
  };

  setData = (dataValue) => {
    this.setState({ data: dataValue });
  };

  render() {
    return (
      <react.Fragment>
        <div
          style={{ marginLeft: "5%", marginRight: "5%" }}
          className="input-group mb-3"
        >
          <input
            type="text"
            className="form-control"
            placeholder="input field"
            id="ex3"
            onChange={(e) => this.setData(e.target.value)}
          />
          <button
            //onClick={() => handleClick(this.props.state)}
            onClick={this.props.handleClick("hello")}
            className="btn btn-outline-secondary"
            type="button"
          >
            +
          </button>
        </div>
      </react.Fragment>
    );
  }
}

export default Input;
