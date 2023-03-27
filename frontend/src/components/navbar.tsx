import { useState } from "react";
import Banner from "../images/banner.jpg";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [token, setToken] = useState<string>(useSelector((state:any) => state.user));
  console.log("xd")
  console.log(token)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-8 py-1 bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold self-center leading-relaxed inline-block m-auto py-2 whitespace-nowrap uppercase text-black text-xl"
              href="#pablo"
            >
              Shoply
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">---</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/login"
                >
                  <i className="fab fa-twitter text-lg leading-lg  text-black opacity-75"></i>
                  <span className="p-1 ">
                    <BsFillBagFill size={22} />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/register"
                >
                  <i className=" text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2 p-1  border-b-2">Register</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/login"
                >
                  <i className=" text-lg leading-lg text-black opacity-75"></i>

                  <span className="ml-2 p-1 px-4  shadow-md rounded-full text-black">
                    Sign in
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
