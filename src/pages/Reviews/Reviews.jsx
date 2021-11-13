import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import Rating from "react-rating";
import useAuth from "../../Hooks/useAuth";

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/review")
        .then((res) => res.json())
        .then((result) => setReview(result))
    );
  }, []);
  return (
    <div className="container mx-auto mt-32">
      <h3 className="text-4xl text-center my-6 font-bold">Customer Review</h3>
      <div class="md:flex md:flex-wrap md:-mx-4 mb-4">
        {review.map((item) => (
          <div class="md:w-1/2 md:px-4 mt-6 md:mt-0 my-4">
            <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img
                  src="//via.placeholder.com/100/eee"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-gray-600">{item.Review}</p>
                <div class="text-gray-600">
                  <p className="mt-6">Rating</p>
                  <Rating initialRating={item.rating} readonly />
                </div>
                <div class="text-gray-900 font-bold uppercase mt-6">
                  - {item.displayName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
