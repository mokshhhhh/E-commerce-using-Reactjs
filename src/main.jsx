import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Loggin from "./Components/SignUp/Loggin.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Objdetail from "./Components/Objdetail.jsx";
import About from "./Components/About/About.jsx";
import Signup from "./Components/SignUp/Signup.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Cart from "./Components/cart/Cart.jsx";
import ProtectedRoute from "./Components/SignUp/ProtectedRoute.jsx";
import Welcome from "./Components/Welcome/Welcome.jsx";
const router = createBrowserRouter([
  {
    path: "", //          "/" top level element.. iske andar rendering horhi hai
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Welcome/>
      },
      {
        path: "login",
        element: <Loggin />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        
        element: <ProtectedRoute />,
        children: [
          {
            path: "contact",
            element: <Contact/>,
          },
          {
            path: "detail/:id", //after colon, it is a variable that is passed since in  navigate(`detail/${k}`); 1 half is static while other dynamic
            element: <Objdetail />,
          },

          {
            path: "cart",
            element: <Cart/>,
          },

          {
            path: "products",
            element: <Home/>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
