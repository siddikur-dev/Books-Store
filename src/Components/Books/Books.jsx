import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const booksData = useLoaderData();
  console.log(booksData);
  return (
    <>
      <div>books {booksData.length}</div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">
        {booksData.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
