import React from "react";
import Newscard from "../Newscard";

export async function fetchNews() {
  return await (
    await fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.NEWS_API_KEY}`,
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

function SearchPage({ searchParams }) {
  console.log(req.qurey.params);
  return <div>Hello</div>;
}

export default SearchPage;
