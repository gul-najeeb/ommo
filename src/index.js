import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// page
import { LayoutsRoute } from "./router/layouts-route";

//store
import { Provider } from "react-redux";

//reducer
import Store from "./store";
import { AuthProvider } from "./context/auth.context";

const router = createBrowserRouter([...LayoutsRoute], {
  basename: process.env.PUBLIC_URL,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
