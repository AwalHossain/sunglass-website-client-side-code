import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div
        style={{
          position: "fixed" /* or absolute */,
          top: "35%",
          left: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#2BAD60" width="100" />
      </div>
    )
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
