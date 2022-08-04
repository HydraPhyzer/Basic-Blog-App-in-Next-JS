import React from "react";
import Link from "next/link";

const Header = () => {
  return <div className="flex justify-between items-center p-2 bg-cyan-600 text-white">
    <div className="Logo">
        <Link href="/">
            <img className="cursor-pointer h-10 w-10" src="/Blog.png" alt="" />
        </Link>
    </div>

    <div className="Search">
        <input type="text" placeholder="Enter to Search" className="border-none focus:outline-none p-1 rounded-lg px-2 text-black"/>
    </div>
    
    <div className="Buttons space-x-2">
        <Link href="/">
            <button className="bg-yellow-300 p-2 rounded-lg text-yellow-800">All Post</button>
        </Link>
        <Link href="/">
            <button className="border-2 border-yellow-300 p-2 rounded-lg">Add New Post</button>
        </Link>
    </div>

    </div>;
};

export default Header;
