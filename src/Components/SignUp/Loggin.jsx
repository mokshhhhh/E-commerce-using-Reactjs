import React from "react";
import { useFormik } from "formik";
import { signUpSchema2 } from "../Schemas/index2";
import { Navigate, useNavigate } from "react-router-dom";
export default function Loggin() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema2,
      onSubmit: (values) => {
        const loggedUser = JSON.parse(localStorage.getItem("signUpFormData"));
        if (
          values.email === loggedUser.email &&
          values.password === loggedUser.password
        ) {
            localStorage.setItem("isLoggedIn","true")
          console.log("success");
          navigate("/products");
          
        } else {
            alert("wrong username or password")
            localStorage.setItem("isLoggedIn","false")
            
        }
        
      },
    });
  return (
    <div className="signupContainer flex items-center h-screen bg-repeat bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zMTQ0MDktaW1hZ2Uta3d2d283NHkuanBn.jpg')]   bg-blend-multiply ">
      <div className=" flex-col w-1/3 rounded-lg bg-gray-200 bg-opacity-70 mx-auto my-auto  border-2 box-border px-1 py-3 shadow-md ">
        <form onSubmit={handleSubmit}
        >
          <h1 className="text-3xl mt-10 font-bold text-gray-800">
            {" "}
            Login to your account
          </h1>
          <div className=" font-normal  mt-12 justify-center mr-48">
            {" "}
            Email{" "}
          </div>
          <input
            id="email"
            name="email"
            label="Email"
            autocomplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            className="flex-row justify-center h-8 w-60  text-center border rounded-2xl border-gray-500"
            type="email"
            placeholder="enter your email"
          />
          {errors.email && touched.email ? (
            <p className="form-error text-red-600 text-sm"> {errors.email}</p>
          ) : null}
          <div className=" font-normal  mt-7 justify-center mr-40 ">
            {" "}
            Password{" "}
          </div>
          <input
            id="password"
            name="password"
            type="password"
            label="password"
            autocomplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            className="flex-row justify-center h-8 w-60  text-center border rounded-2xl border-gray-500"
            placeholder="enter your password"
          />
          {errors.password && touched.password ? (
            <p className="form-error text-red-600 text-sm">
              {" "}
              {errors.password}
            </p>
          ) : null}
          <div className="mx-auto bg-blue-600 text-white mt-12 mb-3 box-border border rounded-2xl w-32 justify-center">
            <button className="my-1 w-30" type="submit">
              Login
            </button>
          </div>
          <div className="mt-1 mb-6 font-normal text-sm">
            {" "}
            Don't have an account?{" "}
            <p
              onClick={() => navigate("/signup")}
              className=" hover:cursor-pointer hover:text-blue-800 text-blue-600 -mt-1.5 mb-5"
            >
              {" "}
              Sign up here{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
