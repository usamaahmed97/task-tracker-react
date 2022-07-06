import React, { Component } from "react";
import { headerStyles } from "./HeaderStyles";

class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyles}>React Task Tracker</h1>
      </div>
    );
  }
}

export default Header;
