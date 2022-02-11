import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class AddCourse extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar fixed-top navbar-light bg-primary">
            <h3> Online Job Appplication and Learning Portal</h3>
          </nav>
        </div>
        <br />
        <br />
        <p className="mt-4 text-center">
          <a href="/CourseManagement">Go back to Course Management Page</a>
        </p>
        <div className="containerCustom">
          <h2 align="center">Add a Course</h2>
          <br />
          <form align="center">
            <div className="form-group">
              <label class="col-xs-2" for="courseName">
                Course Name{" "}
              </label>
              <input
                type="text"
                class="col-xs-10"
                name="courseName"
                id="courseName"
                placeholder="enter course name"
                required
              />
            </div>
            <div className="form-group">
              <label for="deliveredBy"> Delivered By </label>
              <input
                type="text"
                name="deliveredBy"
                id="deliveredBy"
                placeholder="enter instructor name"
                required
              />
            </div>
            <div className="form-group">
              <label for="duration">Duration (in mins) </label>
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Enter Duration in minutes"
                required
              />
            </div>
            <div className="form-group">
              <label for="description">Description </label>
              <textarea
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </div>
            <br />
            <Link to="/CourseDetails" className="btn btn-primary" type="submit">
              Add Course
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCourse;
