import "./App.css";
import Navbar from "./pages/Shared/Navabar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import AuthProvider from "./contex/AuthProvider";
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
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
