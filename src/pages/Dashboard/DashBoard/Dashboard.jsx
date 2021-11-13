import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddRiview from "../AddRieview/AddRiview";

import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { logOut, user, admin } = useAuth();
  return (
    <div>
      <div className="font-sans ">
        <div className="font-sans text-gray-900 antialiased">
          <div className="min-h-screen w-full md:flex bg-gray-200">
            <div className="flex-shrink-0 md:w-64 bg-gray-900">
              <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
                <div className="ml-2" style={{ "padding-top": "2px" }}>
                  <div className="mt-12">
                    <Link className="hover:text-red-500 mt-6 " to="/home">
                      Home
                    </Link>
                  </div>
                  <div className=" mb-3">
                    {admin && (
                      <Link className="hover:text-red-500 " to="/admin">
                        Admin
                      </Link>
                    )}
                  </div>
                </div>
                <br />
              </div>

              <div>
                <div className="px-2 py-2">
                  <div>{/* <!----> */}</div>
                </div>
                {/* Left menu */}
                <div className="px-6 py-6 border-t border-gray-700">
                  <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
                    Resources
                  </h4>
                  <ul className="mt-3 text-white">
                    <li className="mt-3">
                      <Link to={`${url}`} className="hover:text-red-500 ">
                        My Order
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        to={`${url}/addReview`}
                        className="hover:text-red-500 "
                      >
                        Add Review
                      </Link>
                    </li>
                    <li className="mt-3 ">
                      <Link
                        to={`${url}/payment`}
                        className="hover:text-red-500 "
                      >
                        Pay
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        onClick={logOut}
                        className="text-white hover:text-red-500 border-2 px-1"
                        to="/"
                      >
                        Logout <span>{user?.displayName}</span>
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
                <Route path={`${path}/payment`}>
                  <div className="w-full mx-auto my-12">
                    <Payment></Payment>
                  </div>
                </Route>
                <Route path={`${path}/addReview`}>
                  <div className="w-full mx-auto my-12">
                    <AddRiview></AddRiview>
                  </div>
                </Route>
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
