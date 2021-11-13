import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const [info, setInfo] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    trackPromise(
      fetch(`https://calm-crag-56953.herokuapp.com/myorder/${user?.email}`)
        .then((res) => res.json())
        .then((result) => setInfo(result))
    );
  }, [control, user?.email]);
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
      {info.length === 0 ? (
        <h2 className="text-4xl flex items-center justify-center mt-40">
          You didn't order Yet
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  mt-6 lg:grid-cols-3 gap-8 px-4">
          {info.map((item) => (
            <div className="bg-white">
              <img className="w-full" src={item.img} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                <div>
                  <span className="bg-yellow-400 p-2 text-white">
                    {item.status}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => handleClick(item._id)}
                    className="bg-red-600 p-2 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
