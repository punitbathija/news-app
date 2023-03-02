"use client";

import React, { useState } from "react";
import { GiNinjaHead } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";

function Header() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleInput = (event) => {
    event.preventDefault();
    if (!input) return;
    if (event.key === "Enter") {
      handleSearch();
      setInput("");
    }
  };

  const handleSearch = () => {
    router.push(`/search?term=${input}`);
  };

  return (
    <div className="navbar bg-base-100 flex justify-center overflow-hidden">
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
              <a href="/">
                <HiOutlineNewspaper /> Top News
              </a>
            </li>
            <li>
              <a href="/category">
                <BiCategory />
                Category
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl w-auto">
          <GiNinjaHead />
          New&apos;s Ninja
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className=" w-auto input outline-none focus:outline-none focus:ring-0 overflow-hidden"
            onKeyUp={handleInput}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
