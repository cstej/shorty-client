import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-gray-600">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can easily shorten your boring loooooong URLs
            from our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-primary text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
