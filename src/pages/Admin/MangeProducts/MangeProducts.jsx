import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";

const MangeProducts = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/glasses")
        .then((res) => res.json())
        .then((result) => setOrders(result))
    );
  }, [control]);

  //   Delete Product
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure want to delete?");
    if (confirm) {
      trackPromise(
        fetch(`https://calm-crag-56953.herokuapp.com/removeProduct/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            alert("Order deleted");
            setControl(!control);
          })
      );
    }
  };

  return (
    <div>
      <div className="w-full">
        <h3>Hello from mange order</h3>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Title
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Description
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          {orders?.map((pd, index) => (
            <tbody className="block md:table-row-group">
              <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    title
                  </span>
                  {pd.title}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Description
                  </span>
                  {pd.desc}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <div></div>
                  <button
                    onClick={() => handleDelete(pd._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MangeProducts;
