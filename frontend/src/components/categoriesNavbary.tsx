import { useState } from "react";
import Banner from "../images/banner.jpg";
export default function CategoriesNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-center px-8 py-1 bg-zinc-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
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
            <ul className="flex flex-col lg:flex-row list-none items-center justify-center w-full">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-white opacity-75"></i>
                  <span className="ml-2">Laptops</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-md leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Keyboards</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-white opacity-75"></i>
                  <span className="ml-2">Mouses</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-white opacity-75"></i>
                  <span className="ml-2">Headphones</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
