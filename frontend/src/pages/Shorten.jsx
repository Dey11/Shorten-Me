import React, { useState } from "react";
import axios from "axios";

const Shorten = () => {
  const [shortUrl, setShortUrl] = useState("ddnwuehsbgldfsyuyubawuobsodyhad");
  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    console.log(shortUrl);
    const res = await axios.post("http://localhost:3000/url", {
      url: shortUrl,
    });
    const shortCode = res.data.id;
    setShortUrl("http:localhost:3000/url" + `/${shortCode}`);
  };
  return (
    <div className=" max-w-[1240px] mx-auto pb-10 h-screen ">
      <div className=" text-4xl pb-20 text-center pt-20 font-bold font-serif">
        Shorten Me!
      </div>
      <div className=" text-center">
        <form onSubmit={handleOnSubmit}>
          <input
            className=" bg-teal-500 rounded-md sm:w-[500px] w-[300px] p-2 text-center placeholder:text-[#4e9092]"
            placeholder="Enter the link here"
            onChange={(e) => {
              setShortUrl(e.target.value);
            }}
            value={shortUrl}
          />
          <button className="block mx-auto bg-[#a6e9e0] rounded-md border-solid border-2 border-[#295b5c] hover:bg-[#a3d2cb] m-5 p-1 px-3">
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="pt-10 text-lg">
            {" "}
            Your shortened link is:{" "}
            <span className="block text-2xl select-all"> {shortUrl} </span>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
