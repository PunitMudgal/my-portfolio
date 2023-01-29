import React from 'react'
import noDataImg from '../Images/noData.svg';
 
export default function Blogs(props) {
  return (
    <div className='min-h-auto flex dark:bg-[#121212] justify-center items-center md:py-16 py-8 flex-col select-none'
    >
        <img className='md:h-96 md:w-96 h-60 w-60 ' src={noDataImg} alt="not-Found" />
        <h1 className='dark:text-cyan-300 md:text-6xl text-3xl text-gray-800 font-josefin'>Sorry, No Data To Show</h1>
    </div>
  )
}
