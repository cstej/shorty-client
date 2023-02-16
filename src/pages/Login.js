import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSubmit } from "../redux/slices/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const dispatch = useDispatch();
  const loginForm = (data) => {
    dispatch(loginSubmit(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-secondary sm:text-4xl">
          Get <span className="text-primary">Started</span> Today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
          Hey 👋🏼 buddy! Listen, login to your account now so that you can manage
          all your shorten links more securly!
        </p>

        <form
          onSubmit={handleSubmit(loginForm)}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl bg-gray-800"
        >
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <div className="relative mt-1">
              <input
                {...register("email")}
                type="email"
                id="email"
                className=" w-full px-4 py-3 text-gray-300 text-base  transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none font-medium placeholder:text-gray-400 border-y focus:border border-t-gray-600 focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <div className="relative mt-1">
              <input
                {...register("password")}
                type="password"
                id="password"
                className=" w-full px-4 py-3 text-gray-300 text-base  transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none font-medium placeholder:text-gray-400 border-y focus:border border-t-gray-600 focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <Link className="text-primary font-semibold block text-right hover:underline">
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="block w-full rounded-lg bg-primary hover:bg-secondary transition-all px-5 py-3 text-lg font-medium text-white"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-400 ">
            No account?
            <Link className="text-primary ml-1" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
