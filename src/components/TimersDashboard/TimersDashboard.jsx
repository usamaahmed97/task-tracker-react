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
          elapsed: 0,
          runningSince: Date.now(),
        },
        // {
        //   title: "Practice Web Development",
        //   project: "Web Development Learning",
        //   id: this.generateRandom(),
        //   elapsed: 0,
        //   runningSince: Date.now(),
        // },
      ],
    };
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  createTimer = (timer) => {
    const t = this.newTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
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

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== timerId),
    });
  };

  startTimer = (timerId) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  // Helper Function

  generateRandom = (min = 0, max = 10000) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  };

  //Helper Function

  newTimer = (attrs = {}) => {
    const timer = {
      title: attrs.title || "Timer",
      project: attrs.project || "Project",
      id: this.generateRandom(),
      elapsed: 0,
    };

    return timer;
  };

  render() {
    return (
      <div style={DashboardOuterContainerStyle}>
        <EditableTimerList
          timers={this.state.timers}
          onFormSubmit={this.handleEditFormSubmit}
          onTrashClick={this.handleTrashClick}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </div>
    );
  }
}

export default TimersDashboard;
