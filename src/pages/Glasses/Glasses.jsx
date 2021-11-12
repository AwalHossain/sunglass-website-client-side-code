import React, { useEffect, useState } from "react";
import Glass from "../Glass/Glass";

const Glasses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/glasses")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
      {/* Loo through item */}
      <div className=" mt-24 container mx-auto items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-2 gap-8">
          {data.map((item) => (
            <Glass item={item} key={item._id}></Glass>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glasses;
