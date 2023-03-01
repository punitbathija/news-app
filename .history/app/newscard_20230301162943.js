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
  const articles = data.articles;
  return (
    <>
      <div className="flex flex-wrap gap-5 text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
        {articles.map((article) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={
                    article.urlToImage
                    // "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                    <Link href={article.url}>Read More</Link>
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

export default Newscard;
