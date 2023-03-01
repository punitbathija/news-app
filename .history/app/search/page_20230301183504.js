import React from "react";
import Newscard from "../Newscard";
import { use } from "react";

function SearchPage({ searchParams }) {
  const data = use(fetchNews());
  const articles = data.articles;
  return (
    <div className="p-20 mx-20 ">
      <h1 className="font-semibold text-2xl">
        You searched for <b>{searchParams?.term}</b>
      </h1>
      <Newscard />
    </div>
  );
}

export async function fetchNews() {
  return await (
    await fetch(
      `https://newsapi.org/v2/everything?q=${searchParams?.term}&apiKey=${process.env.NEWS_API_KEY}`,
      {
        // cache: "force-cache" will show cached data
        // cache: "no-cache" will not show cached data
        // cache: "no-store" will not store cached data
        next: { revalidate: 20 },
        // will revalidate cache in 120 seconds
      }
    )
  ).json();
}

export default SearchPage;
