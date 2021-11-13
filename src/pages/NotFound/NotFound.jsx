import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <img
        className="h-96 w-full"
        src="https://i.stack.imgur.com/6M513.png"
        alt=""
      />
      <div className="text-center mx-auto">
        <Link
          className="text-4xl text-center mx-auto text-black my-16"
          to="/home"
        >
          <button className="text-4xl text-center mx-auto text-black my-16">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
