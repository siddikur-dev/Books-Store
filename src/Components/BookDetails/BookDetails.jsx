import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookDetails } = useParams();
  // string to convert number id number
  const bokId = parseInt(bookDetails);
  const bookData = useLoaderData();
  const singleBook = bookData.find((book) => book.bookId === bokId);
  //   destructure singleBook Object
  const { bookName, author, image, category, rating, review, tags,publisher,yearOfPublishing,totalPages } =
    singleBook;

  //split review text
  const first30Word = review.split(" ").slice(0, 30).join(" ") + "...";
  return (
    <div>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Book Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={image}
            alt={bookName}
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Book Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {bookName}
          </h1>
          <p className="text-gray-700">
            <span className="font-semibold">By :</span>
            {author}
          </p>
          <p className="text-lg font-medium text-gray-800 border-b pb-2">
            {category}
          </p>

          <div className="text-gray-600 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">Review :</span>{" "}
              {first30Word}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <div key={i}>
                <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{tag}
                </span>
              </div>
            ))}
          </div>

          <hr />

          {/* Info Table */}
          <div className="space-y-1 text-gray-700">
            <p>
              <span className="font-semibold">Number of Pages:</span> {totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="btn bg-white border-gray-300 hover:bg-gray-100">
              Read
            </button>
            <button className="btn bg-[#00bfa6] text-white hover:bg-[#00a68f]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
