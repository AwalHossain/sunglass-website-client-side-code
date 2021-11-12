import React from "react";
import { Link } from "react-router-dom";

const Glass = (props) => {
  const { title, desc, img, price, _id } = props.item;
  //Single product item
  return (
    <div>
      <div className="bg-white p-5 shadow-lg hover:shadow-xl rounded-lg overflow-hidden ">
        <div className=" ">
          <div className="w-ful h-full overflow-hidden transition transform duration-200 hover:scale-105 ">
            <img
              src={img}
              className="w-full h-full object-cover overflow-hidden"
              alt=""
            />
          </div>
          <div className="text-right">
            <button
              className="text-pink-500 hover:text-pink-600 p-2 rounded-full"
              style={{ background: "rgba(0, 0, 0, 0.3)" }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <h1 className="font-medium text-xl font-poppins">{title}</h1>
            <p className="text-gray-500 font-nunito">{desc}</p>
          </div>
          <div className="p-2 text-right">
            <div className="text-teal-500 font-semibold text-lg font-poppins">
              ${price}
            </div>
            <div className="text-xs text-gray-500 line-through font-poppins">
              $80
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2 pb-2">
          <div className="w-full p-2">
            <Link to={`order/${_id}`}>
              <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
