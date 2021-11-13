import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { trackPromise } from "react-promise-tracker";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
  //Css
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";

  //Sending data to the database
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setInfo(data);
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/addItem", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            reset();
            alert("data added");
            setLoading(false);
          }
        })
    );
  };

  return (
    <div className="w-full">
      <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title text-4xl text-center">LensCart</h1>
        <h3 className="text-sm text-center px-4 my-3">
          Register to get cool lens
        </h3>

        <input
          className={inputStyle}
          placeholder="Title"
          {...register("title", { required: true })}
        />

        <input
          className={inputStyle}
          placeholder="desc"
          {...register("desc", {
            required: true,
          })}
        />
        <input
          className={inputStyle}
          placeholder="Image Link"
          {...register("img", { required: true })}
        />
        <input
          className={inputStyle}
          placeholder="Price"
          {...register("price", { required: true })}
        />
        {/* Spinner for Loading */}
        {isLoading && <div className="spinner mt-10"></div>}
        <input
          type="submit"
          className="w-full text-md px-5 py-2 my-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default AddItem;
