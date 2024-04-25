import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../conf/conf";

function Browse() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSearch = () => {
    if (search === "") {
      return;
    }
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&maxResults=10&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.items))
      .finally(console.log(data));
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:thriller&printType=books&maxResults=20&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.items))
      .finally(console.log(data));
  }, []);

  return (
    <div>
      <div className="mb-7 flex justify-center items-center">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Search..."
          className="w-64 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="max-w-md mx-3 bg-blue-100 shadow-md rounded-lg overflow-hidden mb-5 border-black"
            >
              <img
                src={
                  item.volumeInfo.readingModes.image
                    ? item.volumeInfo.imageLinks.smallThumbnail
                    : "http://lgimages.s3.amazonaws.com/nc-sm.gif"
                }
                alt="Book Thumbnail"
                className="h-90 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 whitespace-normal break-words">
                  {item.volumeInfo.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  Author: {item.volumeInfo.authors[0]}
                </p>
                <p className="text-gray-600 mb-4">
                  Published: {item.volumeInfo.publishedDate}
                </p>
                <div className="flex justify-between">
                  <button
                    // onClick={onDownload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
                  >
                    Download
                  </button>
                  <Link to={`/add/${item.id}`}>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                      Add to Notes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Browse;
