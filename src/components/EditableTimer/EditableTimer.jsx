import React, { Component } from "react";
import { editableTimerOuterDivStyle } from "./EditableTimerStyles";
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.openForm();
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <div style={editableTimerOuterDivStyle}>
          <TimerForm
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            onFormSubmit={this.handleSubmit}
            onFormClose={this.handleFormClose}
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
            onEditClick={this.handleEditClick}
            onTrashClick = {this.props.onTrashClick}
          />
        </div>
      );
    }
  }
}

export default EditableTimer;
