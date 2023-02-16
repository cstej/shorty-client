import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupSubmit } from "../redux/slices/authSlice";

const Signup = () => {
  const { register, handleSubmit, watch } = useForm();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupForm = (data) => {
    dispatch(signupSubmit(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <section>
      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div class="max-w-xl">
          <h1 class="mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Join Shorty,
            <span class="text-secondary">Save Time</span>
          </h1>

          <p class="mt-4 leading-relaxed text-gray-300">
            Don't think about it, do it!
          </p>

          <form
            onSubmit={handleSubmit(signupForm)}
            class="mt-8 grid grid-cols-6 gap-6"
          >
            <div class="col-span-6">
              <label for="Name" class="block text-md font-medium text-gray-300">
                Name
              </label>

              <input
                type="text"
                id="Name"
                name="name"
                {...register("name")}
                class="mt-1 w-full px-4 py-3 text-gray-300 text-base  transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none font-medium placeholder:text-gray-400 border-y focus:border border-t-gray-600 focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary"
                placeholder="Otwell You"
                required
              />
            </div>

            <div class="col-span-6">
              <label
                for="Email"
                class="block text-md font-medium text-gray-300"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                {...register("email")}
                class="mt-1 w-full px-4 py-3 text-gray-300 text-base  transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none font-medium placeholder:text-gray-400 border-y focus:border border-t-gray-600 focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-md font-medium text-gray-300"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                {...register("password")}
                class="mt-1 p-3 w-full rounded-md border-t-gray-500 border-transparent bg-gray-700 text-md text-gray-300 shadow-sm"
                placeholder="********"
                required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-md font-medium text-gray-300"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                {...register("confirm_password", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return toast.error("Passwords do not match");
                    }
                  },
                })}
                class="mt-1 p-3 w-full rounded-md border-t-gray-500 border-transparent bg-gray-700 text-md text-gray-300 shadow-sm"
                placeholder="********"
                required
              />
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button class="inline-block shrink-0 rounded-md border border-primary bg-primary shadow-lg shadow-primary/30 px-12 py-3 text-md font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary">
                Create an Account
              </button>

              <p class="mt-4 text-md text-gray-500 sm:mt-0">
                Already have an account?
                <Link to="/login" class="text-gray-300 underline ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Signup;
