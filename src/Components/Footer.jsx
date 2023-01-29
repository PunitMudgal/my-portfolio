import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-slate-100 w-auto dark:bg-[#171717] h-auto flex  shadow-xl p-10">
      <ul className=" md:ml-36 leading-10 font-sans md:tracking-wider ">
        <li>
          <Link
            className="text-semibold   dark:text-cyan-300 dark:hover:text-cyan-400/50  text-gray-600 hover:text-gray-900"
            to="/"
          >
            Home
          </Link>
        </li>
        
        
        <li>
          <Link
            className="text-semibold  dark:text-cyan-300 dark:hover:text-cyan-400/50 text-gray-600 hover:text-gray-900"
            to="/project"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-semibold   dark:text-cyan-300 dark:hover:text-cyan-400/50  text-gray-600 hover:text-gray-900"
            to="/blog"
          >
            Blogs
          </Link>
        </li>
        {/* <li>
          <Link
            className="text-semibold   dark:text-cyan-300 dark:hover:text-cyan-400/50  text-gray-600 hover:text-gray-900"
            to="/credits"
          >
            Credits
          </Link>
          </li> */}
      </ul>
      <div className="mx-auto flex flex-col  text-center gap-10">
        <div className="flex md:gap-16 gap-5">
          <a target='_blank' href="https://github.com/PunitMudgal">
            <FaGithub className="text-3xl text-slate-600 dark:hover:text-slate-50 dark:text-slate-400 hover:text-slate-800 md:text-5xl  " />
          </a>{" "}
          <a target='_blank' href="https://www.linkedin.com/in/punit-sharma-343160236/">
            <FaLinkedin className="text-3xl text-slate-600 dark:hover:text-slate-50 dark:text-slate-400 hover:text-slate-800 md:text-5xl    " />
          </a>{" "}
          <a target='_blank' href="https://twitter.com/PunitMudgal25">
            <FaTwitter className="text-3xl text-slate-600 dark:hover:text-slate-50 dark:text-slate-400 hover:text-slate-800 md:text-5xl    " />
          </a>{" "}
          <a target='_blank' href="https://www.instagram.com/punitmudgal_/">
            <FaInstagram className="text-3xl text-slate-600 dark:hover:text-slate-50 dark:text-slate-400 hover:text-slate-800 md:text-5xl    " />
          </a>
        </div>

        <div className="font-light text-sm md:font-normal md:text-md dark:text-slate-400">
          <p>
            © 2023-present Punit Sharma. <br /> All Rights Reserved.
          </p>
          <p>Terms of Use | Privacy</p>
        </div>
      </div>
    </div>
  );
}
