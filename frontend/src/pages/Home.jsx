import React from "react";
import { Link } from "react-router-dom";
import LinkPng from "../assets/linkpic.png";

const Home = () => {
  return (
    <div className="pt-20">
      <div className=" max-w-[600px] mx-auto text-center font-bold text-4xl">
        Want to shorten your link?
        <span className="block pt-10">
          Try{" "}
          <Link to="/shorten">
            <button className="text-[#295b5c] rounded-sm">
              <span className="bg-[#d8efec] font-serif text-[45px] underline">
                {" "}
                Shorten Me{" "}
              </span>
            </button>
          </Link>{" "}
          now.
        </span>
        <div className="block text-xl pt-20 pb-40">
          The only free URL shortener you'll ever need!
        </div>
      </div>
      <div className=" bg-[#2e7373] ">
        <div className="mx-auto max-w-[1240px] pt-10 pb-10 grid grid-cols-2 ">
          <div className="heading bottom sm:col-span-1 col-span-2 sm:text-end text-center">
            <span className="text-[#f3faf9] text-4xl">
              A fast and simple URL shortener
            </span>
            <div className="pt-5 text-[#b0dfda]">
              Free URL Shortener for transforming long, ugly links into nice,
              memorable and trackable short URLs. Use it to shorten links for
              any social media platforms, blogs, SMS, emails, ads, or pretty
              much anywhere else you want to share them. Twitter, Facebook,
              YouTube, Instagram, WhatsApp, emails, SMS, videos.
            </div>
          </div>
          <div className="hidden sm:block ">
            <img src={LinkPng} className="max-w-[270px] ml-40 " />
          </div>
        </div>
      </div>
      <div className="btm-part pt-10 pb-10 bg-[#6ebfba]">
        <div className=" max-w-[1240px] mx-auto text-center text-lg">
          <span className="block text-4xl pb-5">
            You can also check your analytics here!
          </span>
          Check how many clicks your shortened link got. Also find out when they
          were used the last time. This information will help you to up your
          game in digital marketing and ensure that you know what you're doing.
          Grow businesses together!
          <div className="block pt-5 text-2xl pb-5">
            <hr className="h-px my-8 border-0 bg-gray-700" />
            <Link to="/signup">
              <span className="font-extrabold underline">Sign up</span>
            </Link>{" "}
            for free and get your{" "}
            <Link to="/my-links">
              <span className="font-bold underline">analytics</span>
            </Link>{" "}
            now!
            <span className="block">
              {" "}
              Or{" "}
              <Link to="/login">
                <span className=" font-extrabold underline">Login</span>
              </Link>{" "}
              instead.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
