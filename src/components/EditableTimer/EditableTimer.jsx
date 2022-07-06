import React, { Component } from "react";
 
import Timer from "../Timer/Timer";
import TimerForm from "../TimerForm/TimerForm";

class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <div >
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
        <div  >
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
            onEditClick={this.handleEditClick}
            onTrashClick={this.props.onTrashClick}
            onStartClick={this.props.onStartClick}
            onStopClick={this.props.onStopClick}
          />
        </div>
      );
    }
  }
}

export default EditableTimer;
