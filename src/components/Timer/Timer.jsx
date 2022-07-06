import React, { Component } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import {
  timerOuterDivStyle,
  timerInnerDivStyle,
  timerHeaderStyle,
  timerClockDivStyle,
  timerStartButtonDivStyle,
  timerStartDivStyle,
  deleteAndEditIconDivStyle,
  buttonStyle,
} from "./TimerStyles";

class Timer extends Component {
  msToHMS = (duration) => {
    var seconds = parseInt((duration / 1000) % 60);
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  };

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    return (
      <div style={timerOuterDivStyle}>
        <div style={timerInnerDivStyle}>
          <div style={timerHeaderStyle}>
            <h3>{this.props.title}</h3>
            <p style={{ marginTop: "-15px", color: "grey" }}>
              {this.props.project}
            </p>
          </div>

          <div style={timerClockDivStyle}>
            <h1 style={{ marginTop: "0px" }}>
              {this.msToHMS(this.props.elapsed)}
            </h1>
          </div>
          <div style={deleteAndEditIconDivStyle}>
            <DeleteFilled style={buttonStyle} onClick={this.handleTrashClick} />
            <EditFilled style={buttonStyle} onClick={this.props.onEditClick} />
          </div>

          <div style={timerStartDivStyle}>
            <button style={timerStartButtonDivStyle}>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
