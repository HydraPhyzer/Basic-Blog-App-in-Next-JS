import React from "react";
import Link from "next/link";

const Header = () => {
  return <div className="flex justify-between items-center p-1 bg-[#1abc9c] text-white">
    <div className="Logo">
        <Link href="/">
            <img className="cursor-pointer h-6 w-6 invert md:h-10 md:w-10" src="/Blog.png" alt="" />
        </Link>
    </div>

    <div className="Search text-xs">
        <input type="text" placeholder="Enter to Search" className="border-none focus:outline-none p-1 rounded-sm px-1 text-black w-[7rem] md:w-full md:px-2 md:p-2 md:text-sm"/>
    </div>
    
    <div className="Buttons space-x-1 text-xs md:space-x-2">
        <Link href="/">
            <button className="bg-yellow-300 p-1 md:p-2 md:text-sm rounded-sm text-yellow-800 border-yellow-300 border-2">All Post</button>
        </Link>
        <Link href="/form">
            <button className="border-2 border-yellow-300 p-1 rounded-sm md:p-2 md:text-sm">Add Post</button>
        </Link>
    </div>

    </div>;
};

export default Header;
