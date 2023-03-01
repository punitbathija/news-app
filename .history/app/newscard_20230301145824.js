import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

function Newscard({ data }) {
  return (
    <>
      <div>
        <h1>All Todo's</h1>
        {data?.map((n) => (
          <h1 key={n.id}>{n.title}</h1>
        ))}
      </div>
      {/* <div className="flex text-center justify-center justify-items-center px-16 py-16 font-bold text-2xl">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure> 
            <img
              src="https://images.pexels.com/photos/4308103/pexels-photo-4308103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Man Divorces Wife</h2>
            <p>In Punjab man divorces wife on grounds of getting fat</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Newscard;
