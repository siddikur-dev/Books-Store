import React from "react";
import {} from "react-router";
import Book from "../Book/Book";
import useBooks from "../../hooks/useBooks";

const Books = () => {
  const { books } = useBooks();
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-5">Books </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 p-4  ">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
