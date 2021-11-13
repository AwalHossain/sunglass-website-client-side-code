import React from "react";
import { useForm } from "react-hook-form";
import { trackPromise } from "react-promise-tracker";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";
  const onSubmit = (data) => {
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("User added as admin");
          reset();
        })
    );
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Make Admin</h2>
      <div>
        <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={inputStyle}
            placeholder="Your Email"
            {...register("email", {
              required: true,
            })}
          />
          {/* Spinner for Loading */}
          <input
            type="submit"
            className="w-full text-md px-5 py-2 my-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
