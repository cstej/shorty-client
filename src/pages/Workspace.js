import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import UrlCard from "../component/UrlCard";
import { createUrl, fetchAllUrls } from "../redux/slices/urlDataSlice";
const Workspace = () => {
  const { register, handleSubmit, reset } = useForm();

  const urlsdata = useSelector((state) => state.urlData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUrls());
  }, [dispatch]);

  const urlform = (data, e) => {
    console.log(data);
    dispatch(createUrl(data));
    e.target.reset();
  };
  return (
    <div>
      <section className="text-gray-200 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          {/* <!-- Intro --> */}
          <div className="flex flex-col items-center w-full text-center md:w-2/3">
            <h1 className="mb-4 text-3xl font-bold title-font sm:text-6xl text-secondary">
              Shorten your
              <span className="text-primary"> loooooong</span> URLs like never
              before!
            </h1>
            <p className="mb-8 leading-relaxed">
              Copy your long boring url. Paste it below. Then 💥 You got it,
              right?
            </p>

            {/* <!-- URL Shortener Form --> */}

            <form
              onSubmit={handleSubmit(urlform)}
              className="flex items-end justify-center w-full"
            >
              <div className="relative w-2/4 mr-4 text-left lg:w-full xl:w-1/2 md:w-full">
                <label
                  htmlFor="long-url"
                  className="text-sm font-semibold leading-10 text-gray-200"
                >
                  Your long Url
                </label>

                <input
                  required
                  id="longUrl"
                  name="url"
                  {...register("longUrl", {})}
                  className=" w-full px-4 py-3 text-base  transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none font-medium placeholder:text-gray-400 border-y focus:border border-t-gray-600 focus:ring-2 focus:ring-primary focus:bg-transparent focus:border-primary"
                  placeholder="https://yoursite.com/"
                />
              </div>

              <button
                type="submit"
                className="inline-flex flex-shrink-0 px-6 py-[11px] text-lg font-semibold text-white transition border-0 rounded bg-secondary focus:outline-none hover:bg-secondary hover:brightness-50"
              >
                Shorten URL
              </button>
            </form>

            <p className="w-full my-4 font-semibold text-md text-secondary animate-pulse"></p>

            <p className="w-full mt-2 mb-8 text-sm text-gray-400">
              React & Express powered URL shortener ✨
            </p>
          </div>

          {/* <!-- The result --> */}
          {urlsdata.length > 0 ? (
            <section className="text-gray-600 body-font">
              <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-col w-full mb-10 text-center">
                  <h2 className="mb-4 text-2xl font-bold text-primary sm:text-5xl title-font">
                    Hoho!
                  </h2>
                  <p className="mx-auto leading-relaxed text-gray-300 lg:w-2/3">
                    Here are your shortened URLs! Now start rick-rolling your
                    friends 😆
                  </p>
                </div>
              </div>

              {/* card */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-2">
                {urlsdata &&
                  urlsdata.map((url) => <UrlCard key={url._id} url={url} />)}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Workspace;
