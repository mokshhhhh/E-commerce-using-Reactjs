import React from "react";
import { Link } from "react-router-dom";
export default function Welcome() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div className=" bg-white max-w-5xl md:max-w-full mx-auto">
      <div className="flex flex-grow justify-center">
        <section className="  bg-center bg-no-repeat bg-[url('https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png')] bg-opacity-60 bg-gray-800 bg-blend-multiply">
          <div className="  object-contain mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Welcome to Fake E-commerce Website
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              {" "}
              Here, you will find a variety of products. From electronics to
              clothes, it has it all. Make an account with the website's easy
              functionality and enjoy shopping!{" "}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              {isLoggedIn === null || "false" ? (
                <Link
                  to="/signup"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              ) : null}

              <Link
                to="/about"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
