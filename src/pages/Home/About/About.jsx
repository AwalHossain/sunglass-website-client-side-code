import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container mx-auto my-5">
      <h3 className="font-bold text-4xl my-8 text-center">About Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4  items-center ">
        <div>
          <img
            className="about-img"
            src="https://cdn.shopify.com/s/files/1/0047/5335/8922/files/Computer-glasses_765x.png?v=1634201412"
            alt=""
          />
        </div>
        <div className="">
          <h3 className="font-bold text-xl">Who we are</h3>
          <p className="text-gray-600 my-4">
            A leading international optical omnichannel player, Lenskart offers
            best-in-class Italian designs powered by German technology.
            Capturing fashion forward, global trends to introduce new designs
            every month, Lenskart has transformed the way people buy eyewear.
            With a unique combination of a strong online and offline presence,
            Lenskart has become the most preferred destination to shop high
            quality, robotically manufactured eyeglasses, sunglasses. Superior
            finish, trendy designs, and much more… come enjoy the Lenskart
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
