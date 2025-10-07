import React from "react";
import { FaUser, FaLocationDot, FaBookOpen } from "react-icons/fa6";

const WishList = ({ book, handleRemoveWishList }) => {
  const {
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = book;

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 border rounded-2xl shadow-sm bg-white hover:shadow-md transition my-5">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={bookName}
          className="w-36 md:w-40 lg:w-44 rounded-md"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-2xl font-bold mb-1">{bookName}</h2>
        <p className="text-gray-600 font-medium mb-3">By: {author}</p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-pink-100 text-pink-700 font-medium px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center text-gray-500 text-sm gap-1">
            <FaLocationDot /> Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Publisher & Page */}
        <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-3">
          <span className="flex items-center gap-2">
            <FaUser className="text-gray-500" /> Publisher: {publisher}
          </span>
          <span className="flex items-center gap-2">
            <FaBookOpen className="text-gray-500" /> Page {totalPages}
          </span>
        </div>

        <hr className="my-3" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span className="text-blue-500 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
            Category: {category}
          </span>
          <span className="text-orange-500 font-medium bg-orange-50 px-3 py-1 rounded-full text-sm">
            Rating: {rating}
          </span>
          <button
            onClick={() => handleRemoveWishList(bookId)}
            className="btn btn-warning text-white px-5 rounded-md text-sm"
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
