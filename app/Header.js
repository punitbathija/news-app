import React from "react";
import { GiNinjaHead } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";

function Header() {
  return (
    <div className="navbar bg-base-100 flex justify-evenly">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <HiOutlineNewspaper /> Top News
              </a>
            </li>
            <li>
              <a>
                <BiCategory />
                Category
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl">
          <GiNinjaHead />
          New's Ninja
        </a>
      </div>
      <div className="navbar-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input outline-none focus:outline-none focus:ring-0 overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

// <div className="mx-auto w-full h-2 flex items-center justify-between p-6 lg:px-8 bg-black text-white">
// <h2 className="flex items-center space-x-2 md:font-bold md:text-2xl">
//   <GiNinjaHead />
//   New's Ninja
// </h2>
// <div className="hidden md:flex items-center space-x-20">
//   <h3 className="flex items-center">
//     <HiOutlineNewspaper />
//     Top News
//   </h3>
//   <div
//     tabIndex={0}
//     className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
//   >
//     <div className="collapse-title text-xl font-medium">Category</div>
//     <div className="collapse-content">
//       <p>General</p>
//       <p>Sports</p>
//       <p>Entertai</p>
//       <p>General</p>
//       <p>General</p>
//       <p>General</p>

//     </div>
//   </div>
// </div>
// <div className="flex items-center space-x-2">
//   <FiSearch />
//   <input
//     type="text"
//     className="min-w-0 flex-auto rounded-md border-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-transparent focus:ring-0 outline-0 sm:text-sm sm:leading-6"
//     placeholder="search for news..."
//   />
// </div>
// </div>

export default Header;
