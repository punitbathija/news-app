import React from "react";
import Newscard from "../Newscard";
import Link from "next/link";
import { use } from "react";

function SearchPage({ searchParams }) {
  async function fetchNews() {
    return await (
      await fetch(
        `https://newsapi.org/v2/everything?q=${searchParams?.term}&apiKey=${process.env.NEWS_API_KEY}`
      )
    ).json();
  }
  const data = use(fetchNews());
  const articles = data.articles;
  return (
    <div className="p-20 mx-20 flex flex-wrap">
      <h1 className="font-semibold text-2xl">
        You searched for <b>{searchParams?.term}</b>
      </h1>
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
  );
}

export default SearchPage;
