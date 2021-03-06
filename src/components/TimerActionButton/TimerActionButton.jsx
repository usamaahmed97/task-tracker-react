import React, { Component } from "react";
import { timerStartButtonDivStyle } from "../Timer/TimerStyles";

class TimerActionButton extends Component {
  handleStartClick = () => {};

  handleStopClick = () => {};

  render() {
    if (this.props.timerIsRunning) {
      return (
        <div>
          <button
            style={timerStartButtonDivStyle}
            onClick={this.props.onStopClick}
          >
            STOP
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            style={timerStartButtonDivStyle}
            onClick={this.props.onStartClick}
          >
            START
          </button>
        </div>
      );
    }
  }
}

export default TimerActionButton;
