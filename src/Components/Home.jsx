import React from "react";
import "./Styles.css";
// import Human from "../Images/human.svg";
// import { HiCodeBracket, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { FaLaptopCode, FaFileCode } from "react-icons/fa";
import { BiChip } from "react-icons/bi";
import {Link} from "react-router-dom";

// dark:bg-[#121212]
export default function Home(props) {
  return (
    <main className="md:py-10 py-3  dark:bg-[#121212]  px-10 md:px-16">
      <div className="relative py-3 sm:max-w-auto sm:mx-auto md:mb-9 mb-5 ">
        <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-bold leading-2 text-center tracking-wide md:tracking-[1.3rem] ">
          <span className="link font-Michroma select-none link-underline link-underline-black dark:text-cyan-400 text-[#3c4264] ">
            PUNIT SHARMA
          </span>
        </h1>
        <br />
        <p className="font-display text-center text-xl md:text-3xl lg:text-4xl font-semibold text-[#4FA3A5] dark:text-teal-400 leading-6 tracking-wide">
          <span className="font-rajdhani">
            {/* link link-underline link-underline-black */}
            Frontend Developer <br /> & Designer
          </span>
        </p>
      </div>
      <hr />
      

      {/* full container */}
      <div className="md:flex flex-row md:gap-6 dark:text-gray-200  font-josefin md:my-7 justify-evenly text-center">
       
        {/* first container  */}
        <div className="bg-slate-50 dark:bg-gray-900 dark:shadow-slate-800 rounded-lg p-4 shadow-md flex-start basis-1/3 my-4 hover:shadow-lg">
          <FaLaptopCode className="text-5xl mx-auto mb-4" />
          <h3 className="md:text-3xl text-2xl tracking-wide dark:text-teal-200 text-[#FA5396] mb-3 font-rajdhani">
            Languages & Technologies
          </h3>

          <ul>
            <li>C</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JAVASCRIPT - React</li>
            <li>Linux Operating System</li>
          </ul>
        </div>

        {/* second container  */}
        <div className="bg-slate-50 dark:bg-gray-900 dark:shadow-slate-800  rounded-lg p-4 shadow-md hover:shadow-lg basis-1/3 my-4 ">
          <FaFileCode className="text-5xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl dark:text-teal-200 text-[#FA5396]  mb-5 font-rajdhani">
            About Me
          </h3>
          <p className="indent-3 font-josefin">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            debitis facere nisi, odio repellendus libero impedit rerum cumque
            dicta recusandae veritatis adipisci aliquam, dolor doloribus autem.
            Saepe corrupti nam beatae laborum dolorum ut aspernatur fuga
            obcaecati itaque atque. Molestiae quam sapiente fugiat, hic totam
            consectetur labore adipisci placeat in a.
          </p>
        </div>

        {/* third container  */}
        <div className="bg-slate-50 rounded-lg p-4 dark:shadow-slate-800  dark:bg-gray-900 shadow-md flex-start basis-1/3 my-4 hover:shadow-lg">
          <BiChip className="text-5xl mx-auto mb-4" />

          <h3 className="md:text-3xl text-2xl dark:text-teal-200 text-[#FA5396] mb-5 font-rajdhani">
            Projects
          </h3>
          <p className="max-w-lg tracking-wider mb-3 md:mb-6 capitalize">
            I have made some awesome React projects for beginners, You can check
            them out in my github account and can also see live hosted on
            netlify.
          </p>

          <Link to="/project" className="bg-[#FCB424] dark:text-black hover:bg-orange-300/70  p-2 px-5 rounded-md shadow-sm hover:shadow-md ">
            Projects
          </Link>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
