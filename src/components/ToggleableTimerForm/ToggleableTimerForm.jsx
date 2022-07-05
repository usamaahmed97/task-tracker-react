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

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
   this.props.onFormSubmit(timer);
   this.setState({isOpen:false});
  
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div>
          <TimerForm 
          onFormSubmit={this.handleFormSubmit}
          onFormClose = {this.handleFormClose}
          
          />
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
