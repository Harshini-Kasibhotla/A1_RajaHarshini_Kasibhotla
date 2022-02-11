import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class SearchCourse extends Component {
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
            <a href="/CourseManagement">Go back to Course Management Page</a>
          </p>
        </div>
        <div className="container">
          <h2 align="center">Search for a Course here</h2>
          <div className="main">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Java"
                text="Java"
              />
            </div>
            <br />
            <br />
            <div align="center">
              <label>
                <b> Advanced Java</b>
              </label>
              <small>Duration : 240 mins</small>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <Link
                to="/CourseDetails"
                className="btn btn-primary"
                type="submit"
              >
                Go To Course Details
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchCourse;
