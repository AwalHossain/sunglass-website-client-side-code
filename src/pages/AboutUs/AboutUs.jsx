import React from "react";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Shared/Navabar/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
