import React, { Component } from "react";
import { connect } from "react-redux";
import img from "../images/signIn.png";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return (
          <li>
            <a href="/auth/google">
              <img src={img} className="google_logo" />
            </a>
          </li>
        );

      case null:
        return <li>Loading</li>;
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav className="navbar_mod">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left-brand-logo"
            className="title_text"
          >
            Feedback
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
