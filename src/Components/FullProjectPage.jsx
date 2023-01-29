import React from "react";
import Data from "../ProjectData.js";
import Projects from "./Projects";
import "./Styles.css";

export default function FullProjectPage(props) {
  return (
    <div className="dark:bg-[#121212] p-1 flex justify-center flex-col md:justify-end md:flex md:flex-col text-center md:p-5">
 
      <h1 className="dark:text-sky-50 text-2xl font-game select-none text-center md:font-bold font-semibold md:text-5xl ">
        <span className="link link-underline link-underline-black">
         React-Projects
        </span>
      </h1>
      {Data.map((project) => (
        <Projects
          darkmode={props.darkmode}
          key={project.projectNo}
          Data={project}
        />
      ))}
    </div>
 
  );
}
