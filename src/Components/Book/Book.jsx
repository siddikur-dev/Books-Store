import React from "react";

const Book = ({ book }) => {
  const { bookName, image, review, tags } = book;

  //split text
  const first50Word = review.split(" ").slice(0, 30).join(" ") + "...";
  return (
    <div>
      <div className="flex px-3 py-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="h-52 w-full object-contain" src={image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{bookName}</div>
            <p className="text-gray-700 text-base">{first50Word}</p>
          </div>
          <div className=" flex gap-2 p-2">
            {tags.map((tag) => (
              <div>
                <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
