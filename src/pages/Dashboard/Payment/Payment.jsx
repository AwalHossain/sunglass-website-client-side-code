import React from "react";

const Payment = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-5">
        Payment system cooming soon......
      </h2>
      <div class="space-y-16 w-full px-4">
        <div class="w-72 md:w-96  h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
          <img
            class="relative object-cover w-full h-full rounded-xl"
            src="https://i.imgur.com/kGkSg1v.png"
            alt=""
          />

          <div class="w-full px-8 absolute top-8">
            <div class="flex justify-between">
              <div class="">
                <h1 class="font-light">Name</h1>
                <p class="font-medium tracking-widest">Karthik P</p>
              </div>
              <img
                class="w-14 h-14"
                src="https://i.imgur.com/bbPHJVe.png"
                alt=""
              />
            </div>
            <div class="pt-1">
              <h1 class="font-light">Card Number</h1>
              <p class="font-medium tracking-more-wider">4642 3489 9867 7632</p>
            </div>
            <div class="pt-6 pr-6">
              <div class="flex justify-between">
                <div class="">
                  <h1 class="font-light text-xs">Valid</h1>
                  <p class="font-medium tracking-wider text-sm">11/15</p>
                </div>
                <div class="">
                  <h1 class="font-light text-xs">Expiry</h1>
                  <p class="font-medium tracking-wider text-sm">03/25</p>
                </div>

                <div class="">
                  <h1 class="font-light text-xs">CVV</h1>
                  <p class="font-bold tracking-more-wider text-sm">···</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Payment;
