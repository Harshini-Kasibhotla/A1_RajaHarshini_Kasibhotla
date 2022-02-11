import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import AddCourse from "./AddCourse";

class CourseManagement extends Component {
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
          <p className="mt-4 text-center">
            <a href="/">Go back </a>
          </p>
          <div className="container" align="center">
            <Link to="/AddCourse" type="submit" className="btn btn-primary">
              Add Course
            </Link>
            &nbsp;&nbsp;
            <Link to="/SearchCourse" type="submit" className="btn btn-primary">
              Search for a Course
            </Link>
          </div>
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

export default CourseManagement;
