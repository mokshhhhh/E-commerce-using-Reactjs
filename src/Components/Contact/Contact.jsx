import React from "react";

export default function Contact() {
  return (
    <div className=" flex bg-white  overflow-hidden">
      
      <iframe
      className="mx-auto my-7"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8072010873466!2d76.36212627502267!3d30.356428803722682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1722239358509!5m2!1sen!2sin"
          width="500"
          height="550"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        {/* // get in touch  */}
        <div className=" flex-col ml-auto h-[300px] my-auto p-6   bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                 Thapar Institute 
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 1234567890
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                 mdhiman_be22@thapar.edu
                </div>
              </div>
            </div>

 {/*form  */}
      <div className="grid ml-auto grid-cols-1 md:grid-cols-2"></div>
      <form className="p-6 flex flex-col mr-32 my-auto items-center ">
        <div className="flex flex-col">
          <label for="name" className="hidden">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Full Name"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label for="email" className="hidden">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label for="tel" className="hidden">
            Number
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            autoComplete="off"
            placeholder="Telephone Number"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="md:w-32  bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-6 hover:bg-orange-600 transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
