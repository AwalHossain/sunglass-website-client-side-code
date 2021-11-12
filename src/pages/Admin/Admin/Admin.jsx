import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AddItem from "../AddItem/AddItem";
import Mange from "../Manage/Mange";

const Admin = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="font-sans mt-16">
        <div className="font-sans text-gray-900 antialiased">
          <div className="min-h-screen flex bg-gray-200">
            <div className="flex-shrink-0 w-64 bg-gray-900">
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
                  </ul>
                </div>
              </div>
            </div>
            {/* Finnished left part */}
            {/* <div className="md:ml-56 flex items-center"></div> */}
            <Switch>
              <Route exact path={path}>
                <AddItem></AddItem>
              </Route>
              <Route path={`${path}/manageOrder`}>
                <Mange></Mange>
              </Route>
            </Switch>
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
