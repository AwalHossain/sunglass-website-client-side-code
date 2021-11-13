import React from "react";
import { useForm } from "react-hook-form";
import { trackPromise } from "react-promise-tracker";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../Hooks/useAuth";

const AddRiview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  //Css
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5  text-sm border-2 border-solid border-gray-300 focus:outline-none";

  //Onsubmit fuctionc
  const onSubmit = (data) => {
    data.displayName = user?.displayName;
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          alert("Your review added");
          reset();
        })
    );
  };
  return (
    <div>
      <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h1 class="title text-4xl text-center">Riview</h1>
        <h3 className="text-sm text-center px-4 my-3">Add Your Review</h3>
        <h3 className="mt-3">Your Review</h3>
        <textarea
          className={inputStyle}
          style={{ marginTop: "1px" }}
          placeholder="Your riview"
          {...register("Review", {
            required: true,
          })}
        />
        <div>
          <h3 className="mt-3">Your Rating</h3>
          <select
            className={inputStyle}
            style={{ marginTop: "1px" }}
            {...register("rating")}
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>
        <input
          type="submit"
          className="w-full cursor-button text-md px-5 py-2 my-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default AddRiview;
