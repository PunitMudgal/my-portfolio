import React from "react";

export default function Projects(props) {
  return (
    <>
    <div className="select-none md:pt-7 md:mb-9 mb-7  md:mx-12 mx-3 mt-8 dark:bg-[#121212]">
      {/* Project Name  */}
      <span className="text-2xl p-1 md:my-1 px-2 sm:px-1 md:px-5  md:text-4xl rounded-md font-rajdhani select-none border bg-orange-300 dark:bg-slate-900 dark:text-slate-200 md:tracking-wide">
        {props.Data.ProjectName}
      </span>

      {/* project description  */}
      <p className=" font-josefin md:text-2xl font-light leading-6 tracking-wider my-3 md:my-5 dark:text-slate-300">
        <span className="font-semibold dark:text-gray-200 text-gray-700">About Project:</span> {props.Data.Description}
      </p>

      <div className="md:my-8 er">
        {/* button 1 */}
        <a
        target='_blank'
          href={props.Data.VisitPro}
          className="md:p-2 p-1 text-black m-2 dark:text-gray-100 font-semibold dark:bg-transparent border border-sky-500 bg-transparent  mb-6 rounded-md hover:bg-sky-600 dark:hover:bg-sky-600"
        >
          Visit Project
        </a>{" "}
        {/* button 2 */}
        <a
         target='_blank'
          href={props.Data.SourceCode}
          className="md:p-2 p-1 dark:text-slate-200 text-bold dark:bg-transparent text-black m-2 bg-transparent  rounded-md border border-[#FCB424] hover:bg-orange-500 dark:hover:bg-orange-500 font-semibold "
        >
          View Code
        </a>
      </div>
    </div>
      <hr className="md:mx-40 mx-14 " />
      </>
  );
}
