import Image from "next/image";
import Header from "./header";
import styles from "./page.module.css";
import { BiCategory, BiCodeBlock } from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { MdSportsCricket, MdLocalMovies } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Header />
      <h2 className="px-16 py-4 font-bold text-2xl">Top News📰</h2>
      <div className="flex flex-col justify-between mx-24 gap-3 md:flex-row overflow-x-scroll">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="flex text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
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
    </>
  );
}
