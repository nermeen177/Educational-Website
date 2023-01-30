import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AllCourses from "./routes/AllCourses";
import Contact from "./routes/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllCourses" element={<AllCourses />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
