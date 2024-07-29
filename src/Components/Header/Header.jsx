import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Header() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity,null)
  );
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const classConditons = (isActive) => {
    let baseClass =
      "block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0";
    let activeClass = isActive ? "text-orange-700" : "text-gray-700";

    return `${baseClass} ${activeClass}`;
  };
  return (
    <header className="shadow sticky z-30 max-h-16 top-0">
      <nav className="bg-white w-full px-4 lg:px-6  py-1.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
              className="mr-3 h-12"
              alt="Logo"
            />
            <p className="font-extrabold"> E-comm</p>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLoggedIn === (null || "false") ? (
              <>
                <NavLink
                  to="signup"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  ${
                      isActive ? "text-orange-700" : "  text-gray-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-orange-700 lg:p-3`
                  }
                >
                  Sign up
                </NavLink>
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-800" : "text-gray-800"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-2`
                  }
                >
                  Log in
                </NavLink>
              </>
            ) : null}
            {isLoggedIn === "true" ? (
              <>
                <NavLink
                  to="cart"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <ShoppingCartIcon />
                  {totalQuantity}
                </NavLink>

                <button
                  onClick={handleLogOut}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mx-2 text-center"
                >
                  Logout
                  <LogoutIcon className="scale-75" />
                </button>
              </>
            ) : null}
          </div>
          <div
            className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isLoggedIn !== "true" ? "lg:ml-auto -mr-5 py-2" : ""
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 mx-auto font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                {isLoggedIn === "true" ? (
                  <NavLink
                    to="products"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Products
                  </NavLink>
                ) : null}
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) => classConditons(isActive)}
                >
                  About
                </NavLink>
              </li>
              <li>
                {isLoggedIn === "true" ? (
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
