import React, { Component } from "react";
import {
  timerFormStyle,
  timerFormlabelAndInputDivStyle,
  timerButtonDivStyle,
  timerButtonStyle,
} from "./TimerFormStyles";

import { timerOuterDivStyle, timerInnerDivStyle } from "../Timer/TimerStyles";

class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };

  render() {
    const submitText = this.state.title ? "Update" : "Create";

    return (
      <div style={timerOuterDivStyle}>
        <div style={timerInnerDivStyle}>
          <div style={timerFormStyle}>
            <div style={timerFormlabelAndInputDivStyle}>
              <span>Title</span>
              <input
                type="text"
                style={{ marginTop: "5px" }}
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>

            <div style={timerFormlabelAndInputDivStyle}>
              <span>Project</span>
              <input
                type="text"
                style={{ marginTop: "5px" }}
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
            </div>

            <div style={timerButtonDivStyle}>
              <button style={timerButtonStyle}>{submitText}</button>
              <button style={timerButtonStyle}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
