import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import useAuth from "../../../Hooks/useAuth";

const OrderDetails = (props) => {
  const { user } = useAuth();
  const { title, desc, price, img, status, _id } = props.item;
  const [control, setControl] = useState(false);
  useEffect(() => {
    trackPromise(
      fetch(`https://calm-crag-56953.herokuapp.com/${user?.email}`)
        .then((res) => res.json())
        .then((result) => console.log(result))
    );
  }, [control, user?.email]);
  //Handle Click delete
  const handleClick = (id) => {
    const confirm = window.confirm("Are you sure want to delete?");
    if (confirm) {
      trackPromise(
        fetch(`https://calm-crag-56953.herokuapp.com/removeOrder/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert("Deleted");
              setControl(!control);
            } else {
              setControl(false);
            }
          })
      );
    }
  };
  return (
    <div>
      <div className="bg-white">
        <img className="w-full" src={img} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <div>
            <span className="bg-yellow-400 p-2 text-white">{status} </span>
          </div>
          <div>
            <button
              onClick={() => handleClick(_id)}
              className="bg-red-600 p-2 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
