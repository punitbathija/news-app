import Image from "next/image";
import styles from "./page.module.css";
import { BiCategory, BiCodeBlock } from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { MdSportsCricket, MdLocalMovies } from "react-icons/md";
import Header from "./Header";
import Newscard from "./Newscard";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = res.json();
    return { props: { data } };
  } catch (e) {
    console.log(e);
  }
}

export default function Home({ data }) {
  return (
    <>
      <Header />
      <h2 className="px-16 py-4 font-bold text-2xl">Top News📰</h2>
      <Newscard />

      <div className="flex text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="news"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.articles[0].author}</h2>
            <p>{data?.articles[0].title}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Read More{data?.articles[0].url}
              </button>
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
