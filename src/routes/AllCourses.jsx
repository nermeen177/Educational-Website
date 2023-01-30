import React from 'react'
import Nav from "../components/common/Nav";
import HeroCources from "../components/courses/HeroCources";
import Courses from "../components/courses/Courses";
import OnlineCourses from "../components/courses/OnlineCourses";

const Allcourses = () => {
  return (
    <>
      <Nav />
      <HeroCources />
      <Courses />
      <OnlineCourses />   
    </>
  )
}

export default Allcourses