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
import AdminRoute from "./pages/Private/AdminRoute/AdminRoute";
function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
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
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/order/:serviceId">
                <OrderRiview />
              </PrivateRoute>
              <AdminRoute path="/admin">
                <Admin />
              </AdminRoute>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
