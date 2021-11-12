import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const PendingOrder = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";

  const { title, desc, img, price } = props.item;
  // Submitting the order
  const onSubmit = (data) => {
    setLoading(true);
    data.title = title;
    data.desc = desc;
    data.img = img;
    data.price = price;
    data.email = user?.email;
    data.status = "pending";
    //Sending order to the database
    fetch("http://localhost:5000/order", {
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
          setLoading(false);
          reset();
          alert("data added");
        }
      });
    setLoading(true);
  };
  const { user } = useAuth();
  return (
    <div className="w-4/5 mx-auto md:flex gap-8">
      {/* Left part */}
      <div>
        <div className="w-full">
          <img className="w-full h-auto" src={img} alt="" />
        </div>
        <div>
          <div className="flex">
            <h3 className=" text-4xl">{title}</h3>
            <h4 className=" text-4xl">${price}</h4>
          </div>
          <p>{desc}</p>
        </div>
      </div>
      {/* Right part */}
      <div className="w-full">
        <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title text-4xl text-center">LensCart</h1>
          <h3 className="text-sm text-center px-4 my-3">
            Register to get cool lens
          </h3>
          <input
            className={inputStyle}
            placeholder="You Name"
            defaultValue={user?.displayName}
            {...register("name", { required: true })}
          />
          <input
            className={inputStyle}
            placeholder="Phone Number"
            {...register("phone_number", {
              required: true,
            })}
          />
          <input
            className={inputStyle}
            placeholder="Your City Name"
            {...register("City")}
          />
          <input
            className={inputStyle}
            placeholder="Your Area Name"
            {...register("area")}
          />
          <textarea
            className={inputStyle}
            placeholder="Write Your address"
            {...register("address")}
          />
          {/* Spinner for Loading */}
          {isLoading && <div className="spinner mt-10"></div>}
          <input
            type="submit"
            className="w-full text-md px-5 py-2 my-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default PendingOrder;
