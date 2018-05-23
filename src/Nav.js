import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/products" activeStyle={{ backgroundColor: "orange" }}>
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/add"
              activeStyle={{ backgroundColor: "orange" }}
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={{ backgroundColor: "orange" }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
