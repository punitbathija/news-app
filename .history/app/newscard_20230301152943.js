import React from "react";

export async function fetchNews() {
  const data = fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
  ).json();
  return props:{
    data
  }
}

function Newscard({ data }) {
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
                Read More{data?.articles[0].url}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newscard;
