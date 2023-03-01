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
  console.log(res);

  return res;
}

function SearchPage({ searchParams }) {
  console.log(searchParams?.term);
}

export default SearchPage;
