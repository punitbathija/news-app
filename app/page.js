import Image from "next/image";
import Header from "./header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h2 className="px-16 py-4 font-bold text-2xl">Top News📰</h2>
      <div className="flex flex-col justify-between mx-24 gap-3 md:flex-row">
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
    </>
  );
}
