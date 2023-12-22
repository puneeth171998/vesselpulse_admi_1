import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Appredux from "./Components/pages/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <Appredux /> */}
        </Provider>
      </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
