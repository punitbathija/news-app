import React from "react";
import styles from "./page.module.css";
import globals from "./globals.css";
import { GiNinjaHead } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";

function Header() {
  return (
    <div className="mx-auto w-full h-2 flex items-center justify-between p-6 lg:px-8 bg-black text-white">
      <h2 className="flex items-center space-x-2 md:font-bold md:text-2xl">
        <GiNinjaHead />
        New's Ninja
      </h2>
      <div className="hidden md:flex items-center space-x-20">
        <h3 className="flex items-center">
          <HiOutlineNewspaper />
          Top News
        </h3>
        <div className="collapse">
          <h3 className="collapse-title flex items-center">
            <BiCategory />
            Categories
          </h3>

          <div className="collapse-content">
            <p>Sports</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <FiSearch />
        <input
          type="text"
          className="min-w-0 flex-auto rounded-md border-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-transparent focus:ring-0 outline-0 sm:text-sm sm:leading-6"
          placeholder="search for news..."
        />
      </div>
    </div>
  );
}

export default Header;
