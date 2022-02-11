import React, { Component } from "react";

class CourseDetails extends Component {
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
        <div className="container">
          <a href="/CourseManagement"> Go Back to Course Management</a>
          <h2 align="left">Course Details</h2>

          <br />
          <form>
            <div className="form-group">
              <label for="courseName" id="labelTest">
                <b> Course Name:</b>
              </label>
              <label for="courseName">Advanced Java</label>
            </div>
            <div className="form-group">
              <label for="deliveredBy" id="labelTest">
                {" "}
                <b>Delivered By: </b>
              </label>
              <label for="deliveredBy">Mr. XYZ</label>
            </div>
            <div className="form-group">
              <label for="duration" id="labelTest">
                <b>Duration: </b>
              </label>
              <label for="duration">240 mins</label>
            </div>
            <div className="form-group">
              <label for="description" id="labelTest">
                <b>Description: </b>
              </label>
              <p>
                {" "}
                Advanced Java is everything that goes beyond Core Java – most
                importantly the APIs defined in Java Enterprise Edition,
                includes Servlet programming, Web Services, the Persistence API,
                etc. It is a Web & Enterprise application development platform
                which basically follows client & server architecture.
              </p>
            </div>
            <div className="form-group">
              <label for="description" id="labelTest">
                <b>Rating: </b>
              </label>
              <label>4.0/5</label>
            </div>
            <br />
            <button className="btn btn-primary" type="submit">
              Update Course
            </button>
            &nbsp; &nbsp; &nbsp;
            <button className="btn btn-primary" type="submit">
              Delete Course
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CourseDetails;
