import "./App.css";
import Navbar from "./pages/Shared/Navabar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import AuthProvider from "./contex/AuthProvider";
import PrivateRoute from "./pages/Private/PrivateRoute/PrivateRoute";
import Glasses from "./pages/Glasses/Glasses";
import Admin from "./pages/Admin/Admin/Admin";
import Dashboard from "./pages/Dashboard/DashBoard/Dashboard";
import OrderRiview from "./pages/OrderReview/OrderRiview";
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/glasses">
                <Glasses />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/order/:serviceId">
                <OrderRiview />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <PrivateRoute path="/dashboard"></PrivateRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
