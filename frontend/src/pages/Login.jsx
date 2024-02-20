import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handlelogin = async (ev) => {
    ev.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/auth/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      setRedirect(true);
      setUserInfo(response.data.username);
    } else {
      alert("not logged in");
    }
    setUsername("");
    setPassword("");
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="2xl:h-screen ">
      <div className="2xl:pt-24 2xl:grid 2xl:grid-cols-2 ">
        <div className=" mx:auto py-20 2xl:ml-16 2xl:pl-10 text-center">
          {" "}
          <div className="pb-8 text-4xl">
            Login to{" "}
            <span className="font-serif font-bold text-[40px]">
              Shorten Me!
            </span>{" "}
          </div>
          <div>
            <ul className="2xl:list-disc p-5 text-xl space-y-5 font-bold">
              <li>Generate unlimited shortened URLs for your daily use.</li>
              <li>Get analytics based on your shortened links.</li>
              <li>Store all the shortened links you generate.</li>
              <li>Easily share all your links from one place.</li>
            </ul>
          </div>
        </div>
        <div className=" px-0 justify-start mx-0">
          <div className=" mr-28 ml-10 text-center py-16 text-xl bg-[#b9f4ed] rounded-lg">
            <form className="  space-y-8 py-10" onSubmit={handlelogin}>
              <div className=" ">
                <label>Username</label>
                <input
                  className="bg-teal-500 rounded-md placeholder:text-[#4e9092] px-2 block mx-auto "
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  className="bg-teal-500 rounded-md placeholder:text-[#4e9092] px-2 block mx-auto"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="bg-[#d8efec]  rounded-md mx-auto border-solid border-2 border-[#295b5c] hover:bg-[#a3d2cb] px-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
