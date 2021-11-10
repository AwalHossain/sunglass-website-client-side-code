import React from "react";

const Glasses = () => {
  fetch("http://localhost:5000/glasses")
    .then((res) => res.json())
    .then((result) => console.log(result));
  return <div>this is form glasses</div>;
};

export default Glasses;
