import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const handleChangeAndSave = (e) => {
    handleChange(e);
    // const updatedData = { ...values, [e.target.name]: e.target.value };
    //setdata(updatedData);
    //localStorage.setItem("Sign up form data", JSON.stringify(updatedData));
  };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: data,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        localStorage.setItem("signUpFormData", JSON.stringify(values));

        navigate("/login");
      },
    });
  return (
    <div className="signupContainer flex items-center  h-screen bg-[url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zMTQ0MDktaW1hZ2Uta3d2d283NHkuanBn.jpg')]   bg-blend-multiply">
      <div className=" flex-col w-[500px]  mx-auto   border-2 rounded-lg box-border px-1 py-3 shadow-md  bg-gray-200  bg-opacity-60">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl mt-10 font-bold text-gray-800">
            {" "}
            Create your Account
          </h1>
          <div className="  font-normal text-balance mt-10 mr-48 justify-center">
            {" "}
            Name{" "}
          </div>
          <input
            id="name"
            name="name"
            className="flex-row justify-center h-8 w-60  text-center border rounded-2xl border-gray-500"
            autocomplete="off"
            value={values.name}
            placeholder="enter your name"
            onChange={handleChangeAndSave}
            onBlur={handleBlur}
            margin="normal"
          />
          {errors.name && touched.name ? (
            <p className="form-error text-red-600 text-sm"> {errors.name}</p>
          ) : null}

          <div className=" font-normal  mt-7 justify-center mr-48"> Email </div>
          <input
            id="email"
            name="email"
            label="Email"
            autocomplete="off"
            value={values.email}
            onChange={handleChangeAndSave}
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
            onChange={handleChangeAndSave}
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
          <div className=" font-normal mt-7 justify-center mr-28 ">
            {" "}
            Confirm Password{" "}
          </div>
          <input
            id="confirm_password"
            name="confirm_password"
            label="Confirm password"
            autoComplete="off"
            value={values.confirm_password}
            onChange={handleChangeAndSave}
            onBlur={handleBlur}
            margin="normal"
            className="flex-row justify-center h-8 w-60  text-center border rounded-2xl border-gray-500"
            type="password"
            placeholder="Confirm your password"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error text-red-600 text-sm">
              {" "}
              {errors.confirm_password}
            </p>
          ) : null}

          <div className="mx-auto bg-blue-600 text-white mb-10 mt-10  box-border border rounded-2xl w-32 justify-center">
            <button className="my-1 w-30   " type="submit">
              Sign Up
            </button>
          </div>
          <div className="mt-1 font-normal text-sm">
            {" "}
            Have an existing account?{" "}
            <p
              onClick={() => navigate("/login")}
              className=" hover:cursor-pointer hover:text-blue-800 text-blue-600 -mt-1.5"
            >
              {" "}
              Login here{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
