import React from "react";
import Link from "next/link";
import { use } from "react";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";

function Gerneral({ searchParams }) {
  async function fetchNews() {
    return await (
      await fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEWS_API_KEY}`,
        {
          // cache: "force-cache" will show cached data
          // cache: "no-cache" will not show cached data
          // cache: "no-store" will not store cached data
          // cache: "only-if-cached",
          next: { revalidate: 20 },
          // will revalidate cache in 120 seconds
        }
      )
    ).json();
  }
  const data = use(fetchNews());
  const articles = data.articles;
  return (
    <>
      <Header />
      <h1 className="flex justify-start align-middle gap-2 text-center align-center p-10 mx-10 font-semibold text-2xl">
        <Link href="/category">
          <BiArrowBack className="" />
          Categories
        </Link>
      </h1>
      <h1 className="flex justify-start align-middle gap-2 text-center align-center p-10 mx-10 font-semibold text-2xl text-stone-200 ">
        Technogly News
      </h1>
      <div className="flex flex-wrap gap-5 text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
        {articles.map((article) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={
                    article.urlToImage ||
                    "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt="news"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {article.author}</h2>
                <small className="font-light text-xs">
                  Published At: {article.publishedAt}
                </small>
                <p>{article.title}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link href={article.url} target="_blank">
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gerneral;
