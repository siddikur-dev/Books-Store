import React from "react";
import { useParams } from "react-router";
import { addToReadLS, addToWishlistLS } from "../../Utility/addToDB";
import useBooks from "../../hooks/useBooks";

const BookDetails = () => {
  const { bookDetails } = useParams();
  const { books, loading, error } = useBooks();
  const bookDetailsId = parseInt(bookDetails);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-blue-500"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }
  const singleBook = books.find((book) => book.bookId === bookDetailsId);

  if (!singleBook) return <p>No book found</p>;

  //   destructure singleBook Object
  const {
    bookName,
    author,
    image,
    category,
    rating,
    review,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    bookId,
  } = singleBook;
  //split review text
  const first30Word = review.split(" ").slice(0, 30).join(" ") + "...";

  // Mark As Read Function
  const handleMarkAsRead = (id) => {
    addToReadLS(id);
  };
  //Mark As Wishlist Function
  const handleWishlist = (id) => {
    addToWishlistLS(id);
  };
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
              <span className="font-semibold">Number of Pages:</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span>{" "}
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-success "
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishlist(bookId)}
              className="btn btn-accent text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
