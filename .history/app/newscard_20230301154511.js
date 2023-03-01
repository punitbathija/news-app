import Link from "next/link";
import React from "react";
import { use } from "react";

export async function fetchNews() {
  return await (
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
    )
  ).json();
}

function Newscard({}) {
  const data = use(fetchNews());
  return (
    <>
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
                <Link href={data?.articles[0].url}>Read More</Link>
              </button>
              <small>Published At{data?.articles[0].publishedAt}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscard;
