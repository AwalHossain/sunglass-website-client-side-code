import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";
const Login = () => {
  //Login state
  const { signInUser, isLoading } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  //Css
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";

  //Onsubmit fuctionc
  const onSubmit = (data) => {
    signInUser(data.email, data.password);
    console.log(data);
  };

  return (
    <div className="bg-gray-200">
      <div className="w-full md:w-1/2 xl:w-1/3 container mx-auto pt-4 md:pb-1 rounded-md">
        <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <h1 class="title text-4xl text-center">LensCart</h1>
          <h3 className="text-sm text-center px-4 my-3">
            Register to get cool lens
          </h3>

          <input
            className={inputStyle}
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <input
            className={inputStyle}
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: { value: 13, message: "Max length 13" },
            })}
          />
          {/* Spinner for Loading */}
          {isLoading && <div className="spinner mt-10"></div>}
          <input
            type="submit"
            className="w-full text-md px-5 py-2 my-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
          />
          <Link
            className="mt-5 border-b-2 hover:border-indigo-600 w-1/2 transition"
            to="/register"
          >
            New user? Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
