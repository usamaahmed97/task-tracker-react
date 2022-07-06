import React, { Component } from "react";
import TimerActionButton from "../TimerActionButton/TimerActionButton";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import {
  timerOuterDivStyle,
  timerInnerDivStyle,
  timerHeaderStyle,
  timerClockDivStyle,
  timerStartDivStyle,
  deleteAndEditIconDivStyle,
  buttonStyle,
} from "./TimerStyles";

class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  // Helper Function
  renderElapsedString = (elapsed, runningSince) => {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  }

  millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(":");

    return humanized;
  };

  pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  };

  render() {
    const elapsedString = this.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
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
              {/* {this.msToHMS(this.props.elapsed)} */}
              {elapsedString}
            </h1>
          </div>
          <div style={deleteAndEditIconDivStyle}>
            <DeleteFilled style={buttonStyle} onClick={this.handleTrashClick} />
            <EditFilled style={buttonStyle} onClick={this.props.onEditClick} />
          </div>

          <div style={timerStartDivStyle}>
            <TimerActionButton
              timerIsRunning={!!this.props.runningSince}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
