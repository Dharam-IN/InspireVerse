import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative py-10 md:py-[10rem] px-4 md:px-10 lg:px-96">
      <div className="bg-black h-full w-full opacity-60	z-20 absolute top-0 left-0"></div>
      <div className="text-white h-full flex items-center justify-center flex-col gap-[3rem] z-30 relative">
        <h1 className="text-[3rem] md:text-[5rem] font-bold text-center">
          About Us
        </h1>{" "}
        <p className="text-[2.5rem] font-medium text-center">
          Hi, we're INSPIREVERSE!
        </p>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-10"
        src="/about_us_banner.jpg"
        alt=""
      />
    </div>
    // <PageBanners
    //   heading="About Us"
    //   imagePath="/about_us_banner.jpg"
    //   text="Hi, we're UPFLAIRS!"
    // />
  );
};

export default AboutBanner;
