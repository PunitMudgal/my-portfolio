import React from "react";
import { IoIosMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import {Link} from "react-router-dom";  
// import {TiAdjustBrightness} from 'react-icons/ti';

export default function Navbar(props) {
  // console.log(props.darkmode);
  return (
    <section className="py-10 dark:bg-[#121212] w-full px-10 md:px-16">
      <nav className="flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-mono font-semibold text-[#FCB424]"
        >
          Punit Sharma
        </Link>
        <ul className="flex items-center gap-3 dark:text-cyan-300 md:gap-10 lg:gap-20 text-slate-700 md:text-lg md:tracking-wider">
          <li>
            <Link
              className="font-light dark:hover:text-slate-50  hover:text-gray-900  hover:underline-offset-8 hover:underline decoration-[#FCB424]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-light dark:hover:text-slate-50  hover:text-gray-900 hover:underline-offset-8 hover:underline decoration-[#FCB424]"
              to="/project"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className=" font-light dark:hover:text-slate-50  hover:text-gray-900 hover:underline-offset-8 hover:underline decoration-[#FCB424]"
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          {/* <li>
            <Link
              className=" font-light dark:hover:text-slate-50  hover:text-gray-900 hover:underline-offset-8 hover:underline decoration-[#FCB424]"
              to="/credits"
            >
              Credits
            </Link>
          </li> */}
          <li
            onClick={() => props.setDarkmode(!props.darkmode)}
            className="font-light hover:font-semibold dark:text-slate-300  hover:text-gray-800  dark:hover:text-yellow-300"
          >
            {props.darkmode ? (
              <ImSun className="cursor-pointer text-xl md:text-3xl" />
            ) : (
              <IoIosMoon className="cursor-pointer text-xl md:text-3xl" />
            )}
            {/* <IoMdMoon/> */}
          </li>
        </ul>
      </nav>
    </section>
  );
}