import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Select from "./Select";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <Select nums={this.props.nums} />
        <div style={{ textAlign: "center", fontSize: "1.3rem" }}>
          <Link to='/'>Home </Link> | <Link to='/about'>About</Link>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
