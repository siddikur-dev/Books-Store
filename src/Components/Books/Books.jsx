import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const booksData = useLoaderData();
  return (
    <>
      <h2 className="text-3xl font-bold text-center my-5">Books </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 p-4  ">
        {booksData.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
