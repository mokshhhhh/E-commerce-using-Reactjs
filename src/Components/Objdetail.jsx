import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./cart/cartSlice";
import { useDispatch } from "react-redux";
function Objdetail({}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate1 = useNavigate();
  const [singleList, setsingleList] = useState([]);
  const handleClick2 = (singleList) => {
    dispatch(addToCart({ ...singleList, quantity: 1 }));
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          //console.log({ id });
          setsingleList(response.data);
          //console.log(singleList);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [id]);
  return (
    <div className="w-full max-w-7xl my-auto">
      <div className="flex bg-white my-4 rounded-md justify-start items-start w-full  ">
        <img
          className="border-3 object-contain border-gray-300 shadow-md rounded-lg my-5 py-3 ml-4 px-3 w-[200px] h-[150px] sm:w-[200px] sm:h-[150px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[450px] "
          src={singleList.image}
        />
        <div className="text-left  my-5 mx-10 font-bold">
          {" "}
          <h1 className="text-4xl">{singleList.title}</h1>
          <div className="flex items-center mt-1.5 mb-3">
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
              <span className="bg-blue-100 text-xs font-semibold px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-90000 ms-2">
                {" "}
                {singleList.rating?.rate}
              </span>
            </div>
            <div className="h-auto text-sm mx-1 font-light">
              {" "}
              {singleList.rating?.count} ratings
            </div>
          </div>
          <div className=" my-5 text-3xl items-start">
            ${singleList.price}
            <button
              type="button"
              onClick={() => handleClick2(singleList)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mx-12  mb-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              <ShoppingCartIcon />
            </button>
          </div>
          Description:
          <div className="font-normal lg:text-lg sm:text-md text-left ">
            {singleList.description?.toLowerCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objdetail;
