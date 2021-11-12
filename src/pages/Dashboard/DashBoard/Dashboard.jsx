import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="font-sans mt-16">
        <div className="font-sans text-gray-900 antialiased">
          <div className="min-h-screen flex bg-gray-200">
            <div className="flex-shrink-0 w-64 bg-gray-900">
              <a href="#">
                <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
                  <div className="ml-2" style={{ "padding-top": "2px" }}>
                    bobrtc
                  </div>
                </div>
              </a>
              <div>
                <div className="px-2 py-2">
                  <div>{/* <!----> */}</div>
                </div>
                <div className="px-6 py-6 text-white">
                  <a
                    href="/app/"
                    className="router-link-exact-active router-link-active"
                  >
                    Phonebook
                  </a>
                </div>
                {/* Left menu */}
                <div className="px-6 py-6 border-t border-gray-700">
                  <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
                    Resources
                  </h4>
                  <ul className="mt-3 text-white">
                    <li className="mt-3">
                      <Link to={`${url}`} className="">
                        My Order
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link to={`${url}`} className="">
                        Add Review
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link to={`${url}/payment`} className="">
                        Pay
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Finnished left part */}
            <div className=" w-full ">
              <Switch>
                <Route exact path={path}>
                  <MyOrder></MyOrder>
                </Route>
                <div className="w-full mx-auto my-12">
                  <Route path={`${path}/payment`}>
                    <Payment></Payment>
                  </Route>
                </div>
              </Switch>
            </div>

            {/* Finished Right part */}
          </div>
        </div>
        <div className="vue-portal-target"></div>
        {/* ------ */}
      </div>
    </div>
  );
};

export default Dashboard;
