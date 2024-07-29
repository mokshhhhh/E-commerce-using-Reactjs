import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment, removeFromCart } from "./cartSlice";
const Cart = () => {
  const navToHome = useNavigate();
  const dispatch = useDispatch();

  const addedItems = useSelector((state) => state.cart);
  const handleToHome = () => {
    navToHome("/products");
  };
  const handleRemove = (itemid) => {
    dispatch(removeFromCart(itemid));
  };
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity,null)
  );
  const totalAmount=useSelector((state)=>
  state.cart.reduce((total,item)=>total+  item.quantity*item.price,null))
  return (
    <div className=" bg-white  max-h-full">
      <h1 className="text-start py-4 text-4xl   font-medium">
        {" "}
        Your Shopping Cart{" "}
      </h1>
      {addedItems.length > 0 ? (
        <div className="flex bg-white justify-end">
        <div className="  flex-none  max-w-xl mr-2  px-3 rounded-md  bg-white border shadow-lg box-border ">
        <p className=" font-medium"> Proceed to Buy</p>
        <div className="text-md ">
            Your Subtotal ({totalQuantity} items)-${Math.floor(totalAmount*100)/100}
            <p className="my-2 mx-auto w-24 rounded-xl bg-blue-800 text-gray-100"> Pay now </p>
        </div>
      </div> 
      </div>
      ): null}

      {addedItems.length > 0 ? (
        addedItems.map((item) => {
          return (
            <>
              <div className=" flex  justify-normal mx-1  bg-white w-40 h-auto py-4 mb-10 ">
                <img src={item.image} className="mr-2 rounded-md px-2" />
                <div className="flex-none rounded-md px-3 py-3 bg-white ml-4 my-auto">
                  <h3 className="font-semibold text-left"> {item.title}</h3>
                  <h2 className="text-left"> ${item.price} </h2>

                  <form className=" bg-white  max-w-md mt-3 ">
                    <label
                      for="quantity-input"
                      className="block mb-2  text-sm text-left font-medium text-gray-900"
                    >
                      Choose quantity:
                    </label>
                    <div className="relative flex items-center max-w-52">
                      <button
                        type="button"
                        id="decrement-button"
                        onClick={() => dispatch(decrement({ id: item.id }))}
                        data-input-counter-decrement="quantity-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1.5 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokelinecap="round"
                            strokelinejoin="round"
                            strokewidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        value={item.quantity}
                      />
                      <button
                        type="button"
                        onClick={() => dispatch(increment({ id: item.id }))}
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1.5 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokelinecap="round"
                            strokelinejoin="round"
                            strokewidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className=" mx-3.5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-2  py-1.5 text-center"
                      >
                        Remove
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <hr className="h-px my-8 bg-gray-500 border-0"></hr>
            </>
          );
        })
      ) : (
        <div>
          <p className=" bg-white w-1/2 mx-auto rounded-lg  text-6xl my-auto ">
            {" "}
            Your cart is Empty. Start shopping!{" "}
          </p>
          <button
            type="button"
            onClick={handleToHome}
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
