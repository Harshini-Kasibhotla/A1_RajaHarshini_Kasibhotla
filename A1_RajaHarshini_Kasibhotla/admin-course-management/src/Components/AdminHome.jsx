import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class AdminHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar fixed-top navbar-light bg-primary">
            <h3> Online Job Appplication and Learning Portal</h3>
          </nav>
        </div>
        <div>
          <br />
          <br />
          <br />
          <form>
            <div className="container" align="center">
              <div className="form-group">
                <Link
                  className="btn btn-primary"
                  role="button"
                  to="/CourseManagement"
                >
                  Manage Courses
                </Link>
                <br />
                <br />
                <button className="btn btn-primary">Add Skill Quiz</button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <marquee>
            <h1>Welcome to the Management portal!!!</h1>
          </marquee>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminHome;
