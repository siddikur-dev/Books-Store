import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, image, review, tags, category, bookId } = book;

  //split text
  const first50Word = review.split(" ").slice(0, 30).join(" ") + "...";
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="flex px-3 py-3 border rounded-md container mx-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="h-52 w-full object-contain bg-[#dad7d7] p-4 "
              src={image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="flex gap-3 items-center ">
                <h2 className="font-bold text-xl mb-2">{bookName}</h2>
                <p className="bg-blue-400 p-1 rounded-4xl text-white ">
                  {category}
                </p>
              </div>
              <p className="text-gray-700 text-base">{first50Word}</p>
            </div>
            <div className=" flex gap-2 p-2">
              {tags.map((tag, i) => (
                <div key={i}>
                  <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #{tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
