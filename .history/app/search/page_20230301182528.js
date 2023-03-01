import React from "react";
import Newscard from "../Newscard";

export async function fetchNews() {
  let res = await (
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
  return res;
}

function SearchPage({ searchParams }) {
    return(
        <h1>You searched for <b>{searchParams?Newscard.term}</b></h1>
    )
}

export default SearchPage;
