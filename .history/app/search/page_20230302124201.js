import React from "react";
import Newscard from "../Newscard";
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
    <div className="p-20 mx-20 ">
      <h1 className="font-semibold text-2xl">
        You searched for <b>{searchParams?.term}</b>
      </h1>
      <Newscard />
    </div>
  );
}

export default SearchPage;
