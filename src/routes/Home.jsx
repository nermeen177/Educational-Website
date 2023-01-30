import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import PopularCourses from "../components/home/PopularCourses";
import SuccessfulStudents from "../components/home/SuccessfulStudents";
import About from "../components/home/AboutSection";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <PopularCourses />
      <SuccessfulStudents />
      <Footer />     
    </>
  );
};

export default Home;