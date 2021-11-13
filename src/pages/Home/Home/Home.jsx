import React from "react";
import Reviews from "../../Reviews/Reviews";
import Navbar from "../../Shared/Navabar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div className="mt-14">
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
