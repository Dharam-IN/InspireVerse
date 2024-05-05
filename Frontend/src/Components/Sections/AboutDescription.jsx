import React from "react";

const AboutDescription = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 lg:flex items-center px-[1.24rem] sm:px-[6rem] py-[1.25rem] sm:py-[4rem] gap-[3rem] dark:bg-gray-900">
      <div className="flex items-center justify-center">
        <img
          className="md:w-[80%] lg:w-full"
          src="/about_description.jpg"
          alt=""
        />
      </div>
      <p className="text-center md:text-left text-[1.4rem] font-semibold text-gray-800 dark:text-white">
        <b className="text-3xl">Welcome to InspireVerse</b>
        <hr class="w-48 h-1 my-4 bg-gray-300 border-0 rounded dark:bg-gray-700"/>
        At InspireVerse, we believe in the power of words to inspire, uplift, and connect people from all walks of life. Our platform is dedicated to providing a space where individuals can find motivation, love, shayari, and more through a curated collection of quotes.
      </p>
    </div>
  );
};

export default AboutDescription;