import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="bg-img w-full relative">
        <img
          className="bg-img md:hidden w-full"
          src="https://cdn.shopify.com/s/files/1/0047/5335/8922/files/EyeglassesMobile_copy_1000x_33000118-29c3-43b0-8349-26d5abc0188c_765x.jpg?v=1636353201"
          alt=""
        />
        <img
          className="hidden md:block lg-img w-full"
          src="https://cdn.shopify.com/s/files/1/0047/5335/8922/files/EyeglassesMobile_copy_1900x_c0f84b79-9f5a-4e1d-b9ed-ae73fb228037_1500x.jpg?v=1636353201"
          alt=""
        />
      </div>
      <div>
        <div class="text-wrapper  ">
          <h1 class="header text-2xl font-bold my-2">MEN & WOMEN EYEGLASSES</h1>
          {/* <!--<div class="sub-header"></div>--> */}
          <div class="sub-header" style={{ display: "none" }}>
            Buy 1 Get 1 Free
          </div>
          <div class="sub-header global-hide text-xl">
            Free 14 days Exchange or Refund
          </div>

          <div class="sub-header global-hide text-xl">1 Year Warranty</div>

          <div class="sub-header text-xl">
            Thinnest &amp; Scratch Free Lenses
          </div>
          <div className="my-2">
            <Link to="/glasses">
              <button className="border-2 bg-green-500 px-6 text-white py-2">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
