import React from "react";
import { BiCategory, BiCodeBlock } from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { MdLocalMovies, MdSportsCricket } from "react-icons/md";
import { news } from "../../public/newspaper.svg";

function Category() {
  return (
    <div className="flex flex-col gap-5 text-center justify-center justify-items-center px-16 py-16 font-bold">
      <h2 className="flex text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
        <Link href="/">
          <BiArrowBack className="" />
        </Link>
        Browse News By Category <BiCategory />
      </h2>
      <div className="flex flex-col justify-between mx-24 gap-3 md:flex-row">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Gerneral
              <GiNewspaper />
            </h2>
            <p>Browse Gerneral News.</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Business
              <IoMdBusiness />
            </h2>
            <p>Browse Business News.</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Sports
              <MdSportsCricket />
            </h2>
            <p>Browse Sports News.</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Technology
              <BiCodeBlock />
            </h2>
            <p>Browse Technology News.</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Entertainment
              <MdLocalMovies />
            </h2>
            <p>Browse Entertainment News.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
