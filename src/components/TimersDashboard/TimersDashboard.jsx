import React, { Component } from "react";
import { DashboardOuterContainerStyle } from "./TimersDashboardStyles";
import EditableTimerList from "../EditableTimerList/EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm/ToggleableTimerForm";

class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          title: "Practice Node JS",
          project: "Web Authentication Project",
          id: this.generateRandom(),
          elapsed: "8986300",
          runningSince: Date.now(),
        },
        {
          title: "Practice Web Development",
          project: "Web Development Learning",
          id: this.generateRandom(),
          elapsed: "8986300",
          runningSince: Date.now(),
        },
      ],
    };
  }

  generateRandom = (min = 0, max = 10000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  };

  render() {
    return (
      <div style={DashboardOuterContainerStyle}>
        <EditableTimerList timers={this.state.timers} />
        <ToggleableTimerForm />
      </div>
    );
  }
}

export default TimersDashboard;
