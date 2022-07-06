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

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  generateRandom = (min = 0, max = 10000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = this.newTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
  };

  newTimer = (attrs = {}) => {
    const timer = {
      title: attrs.title || "Timer",
      project: attrs.project || "Project",
      id: this.generateRandom(),
      elapsed: 0,
    };

    return timer;
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== timerId),
    });
  };

  render() {
    return (
      <div style={DashboardOuterContainerStyle}>
        <EditableTimerList
          timers={this.state.timers}
          onFormSubmit={this.handleEditFormSubmit}
          onTrashClick = {this.handleTrashClick}

        />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </div>
    );
  }
}

export default TimersDashboard;
