import React from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-contain  flex bg-blend-multiply justify-center py-8 bg-center  bg-[url('https://i.pinimg.com/564x/e5/50/55/e55055425861f53b8f1837eb4962f92e.jpg')] ">
      <div className="flex flex-col  text-center w-2/3 ">
        <h1 className="text-4xl font-serif ml-4 mt-3"> About </h1>
        <p className="  bg- box box-border shadow-xl px-2 py-2 rounded-sm text-justify sm:text-sm md:text-lg ml-4">
          {" "}
          This project was created by Moksh Dhiman who is a pre-final year
          undergraduate student pursuing B.E. in Electronics and Computer
          engineering from Thapar Institute. It's his first 'big' project based
          on React JS and includes a lot of functionality that needed other
          libraries as well. E-comm is a basic name given on a whim to this site
          that fetches data from a fake API and includes cart functionality,
          where you could add and remove items. It has login authentication
          which doesn't let you see or access components like products, cart, or
          contact. Its acheived via local storage as Moksh is still in the
          process of learning backend technologies. It doesn't have the most
          brilliant and careful designing but its attained with tailwind CSS.
          Thank you for visiting ! Different
          libraries utilised in this project are: <ul className=" my-2 shadow-md box  bg-amber-50 bg-opacity-60 text-xl text-center">
            <li>
                 React router Dom - For routing, including protected routing 
            </li>
            <li>
                Redux Toolkit-For state management , cart functionality
            </li>
            <li>
               Material UI - design purposes
            </li>
            <li>
                Formik and Yup- Form handling and form validation
            </li>
          </ul>
          
        </p>
      </div>
    </div>
  );
}
