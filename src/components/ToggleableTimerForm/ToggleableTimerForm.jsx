import React, { Component } from "react";
import TimerForm from "../TimerForm/TimerForm";
import { togglePlusButtonStyle } from "./ToggleableTimerFormStyles";

class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div>
          <TimerForm />
        </div>
      );
    } else {
      return (
        <div>
          <button style={togglePlusButtonStyle} onClick={this.handleFormOpen}>
            +
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
