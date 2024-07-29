import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
export default function Home() {
  const [user, setuser] = useState([]);
  const dispatch2 = useDispatch();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products ").then((response) => {
      setuser(response.data);
    });
  }, []);
  
  const navigate = useNavigate();
  const handleClickAtHome = (obj) => {
    dispatch2(addToCart({ ...obj, quantity: 1 }));
  };
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-evenly mx-auto mt-10">
      {user.map((obj) => (
        <div
          key={obj.id}
          className="  lg:w-1/4 md:w-1/2 sm:w-full: max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white my-8 py-3 px-2 mx-1 flex flex-col justify-between"
        >
          <img
            className="w-[300px] h-[300px] object-contain max-h-3rounded-lg mx-auto px-2  hover:scale-110 duration-1000"
            src={obj.image}
            alt="product image"
            onClick={() => handleClick(obj.id)}
          />

          <div className="px-3 pb-3 flex flex-col flex-grow">
            <h5 className="text-pretty font-bold  tracking-tight my-2.5 text-gray-900 dark:text-black">
              {obj.title}
            </h5>
            <p className="w-auto text-center font-thin">
              {`${obj.description.slice(0, 80)}`}
              <p
                onClick={() => handleClick(obj.id)}
                className="font-normal text-blue-600 hover:cursor-pointer"
              >
                ...show more{" "}
              </p>
            </p>
            <div className="flex items-center mt-2.5 mb-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="bg-blue-100 mt-auto text-blue-800 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                  {" "}
                  {obj.rating.rate}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-bold text-gray-900 dark:text-black">
                ${obj.price}
              </span>
              <button
                type="button"
                onClick={() => handleClickAtHome(obj)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
