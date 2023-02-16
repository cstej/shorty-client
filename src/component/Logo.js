import React from "react";

const Logo = () => {
  return (
    <div>
      <a
        href="/"
        className="flex items-center mt-2 sm:mt-auto font-medium title-font text-primary md:mb-0 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ff621f"
          className="w-10 h-10 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
          />
        </svg>

        <span className="ml-3 text-xl font-bold text-[#009dff]">Shorty</span>
      </a>
    </div>
  );
};

export default Logo;
