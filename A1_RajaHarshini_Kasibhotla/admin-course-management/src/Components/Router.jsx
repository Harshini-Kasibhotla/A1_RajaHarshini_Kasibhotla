import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import CourseManagement from "./CourseManagement";
import AddCourse from "./AddCourse";
import CourseDetails from "./CourseDetails";
import SearchCourse from "./SearchCourse";

class Router extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/CourseManagement" element={<CourseManagement />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/CourseDetails" element={<CourseDetails />} />
          <Route path="/SearchCourse" element={<SearchCourse />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
