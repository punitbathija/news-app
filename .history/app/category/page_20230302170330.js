import React from "react";
import { BiArrowBack, BiCategory, BiCodeBlock } from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { MdLocalMovies, MdSportsCricket } from "react-icons/md";
import { news } from "../../public/newspaper.svg";
import Link from "next/link";

function Category() {
  return (
    <div className="flex flex-col gap-5 text-center justify-center justify-items-center mx-2 md:px-16 md:py-16 font-bold">
      <h2 className="flex gap-3 text-center justify-center justify-items-center md:px-16 py-16 font-bold text-2xl">
        <Link href="/">
          <BiArrowBack />
        </Link>
        Browse News By Category <BiCategory />
      </h2>
      <div className="flex flex-col text-center align-middle justify-center md:mx-24 gap-3 md:flex-row">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Gerneral
              <GiNewspaper />
            </h2>
            <Link href="/category/general">
              <p>Browse Gerneral News.</p>
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Business
              <IoMdBusiness />
            </h2>
            <Link href="/category/business">
              <p>Browse Business News.</p>
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Sports
              <MdSportsCricket />
            </h2>
            <Link href="/category/sports">
              <p>Browse Sports News.</p>
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Technology
              <BiCodeBlock />
            </h2>
            <Link href="/category/technology">
              <p>Browse Technology News.</p>
            </Link>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Entertainment
              <MdLocalMovies />
            </h2>
            <Link href="/category/entertainment">
              <p>Browse Entertainment News.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
