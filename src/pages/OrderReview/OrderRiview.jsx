import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { useParams } from "react-router";
import PendingOrder from "../PendingOrder/PendingOrder";

const OrderRiview = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [service, setService] = useState([]);
  //   Fetching specific data with the help of id
  useEffect(() => {
    trackPromise(
      fetch(`https://calm-crag-56953.herokuapp.com/glasses/${serviceId}`)
        .then((res) => res.json())
        .then((result) => setService(result))
    );
  }, [serviceId]);
  return (
    <div className="mt-20">
      <h2>This Is from order Rieview</h2>
      {service.map((item) => (
        <PendingOrder item={item} key={item._id}></PendingOrder>
      ))}
    </div>
  );
};

export default OrderRiview;
