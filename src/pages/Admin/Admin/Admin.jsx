import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Private/AdminRoute/AdminRoute";
import AddItem from "../AddItem/AddItem";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Mange from "../Manage/Mange";
import MangeProducts from "../MangeProducts/MangeProducts";

const Admin = () => {
  let { path, url } = useRouteMatch();
  const { logOut, user } = useAuth();
  return (
    <div>
      <div className="font-sans">
        <div className="font-sans text-gray-900 antialiased">
          <div className="min-h-screen  w-full md:flex bg-gray-200">
            <div className="flex-shrink-0 md:w-64 bg-gray-900">
              <div className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium">
                <div className="ml-2" style={{ "padding-top": "2px" }}>
                  <Link to="/home">Home</Link>
                </div>
              </div>
              <div>
                {/* Left menu */}
                <div className="px-6 py-6 border-t border-gray-700">
                  <h4 className="text-sm text-gray-600 uppercase font-bold tracking-widest">
                    Resources
                  </h4>
                  <ul className="mt-3 text-white">
                    <li className="mt-3">
                      <Link to={`${url}`} className="">
                        Add Item
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link to={`${url}/manageOrder`} className="">
                        Manage Orders
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link to={`${url}/manageProducts`} className="">
                        Mange Products
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link to={`${url}/makeAdmin`} className="">
                        Make Admin
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
            {/* <div className="md:ml-56 flex items-center"></div> */}
            <div className="w-full">
              <Switch>
                {/* <div className="w-full md:w-1/2 mx-auto"> */}
                <AdminRoute exact path={path}>
                  <AddItem></AddItem>
                </AdminRoute>
                {/* </div> */}
                <AdminRoute path={`${path}/manageOrder`}>
                  <Mange></Mange>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                  <div className="w-full ">
                    <MangeProducts></MangeProducts>
                  </div>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <div className="w-full md:w-1/2 mx-auto my-12">
                    <MakeAdmin></MakeAdmin>
                  </div>
                </AdminRoute>
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

export default Admin;
