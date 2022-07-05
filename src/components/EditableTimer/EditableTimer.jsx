import React, { Component } from "react";
import { editableTimerOuterDivStyle } from "./EditableTimerStyles";
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };
  render() {
    if (this.state.editFormOpen) {
      return (
        <div style={editableTimerOuterDivStyle}>
          <TimerForm
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
          />
        </div>
      );
    } else {
      return (
        <div style={editableTimerOuterDivStyle}>
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
          />
        </div>
      );
    }
  }
}

export default EditableTimer;
