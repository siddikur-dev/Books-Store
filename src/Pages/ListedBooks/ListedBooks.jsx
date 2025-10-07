import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import ReadBook from "../../Components/Book/ReadBook";
import useBooks from "../../hooks/useBooks";
const ListedBooks = () => {
  //sort set readList Book Data
  const [sort, setSort] = useState("");

  //state set readList Book Data
  const [readList, setReadList] = useState([]);
  //get data from custom hook useBooks
  const { books,loading,error } = useBooks();
  // console.log(books);
  useEffect(() => {
    const storedBook = getStoredBook();
    const myReadList = books.filter((book) => storedBook.includes(book.bookId));
    setReadList(myReadList);
  }, [books]);
  //sort function
  const handleSort = (type) => {
    const sortedList = [...readList];
    setSort(type);
    if (type === "pages") {
      sortedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (type === "rating") {
      sortedList.sort((a, b) => b.rating - a.rating);
    }
    setReadList(sortedList);
  };

  //loading spinner applied
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
  return (
    <div className="my-8 container mx-auto">
      {/* Sort Button */}
      <div className="flex justify-center items-center py-4">
        <details className="dropdown">
          <summary className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 rounded-lg">
            Sort By: {sort ? sort : "Select"}
          </summary>
          <ul className="menu dropdown-content bg-white rounded-lg z-[1] w-44 p-2 shadow-md mt-2">
            <li>
              <button
                onClick={() => handleSort("pages")}
                className="hover:bg-blue-100 rounded-md py-1"
              >
                Pages
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSort("rating")}
                className="hover:bg-blue-100 rounded-md py-1"
              >
                Ratings
              </button>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>My Read List</Tab>
          <Tab>My WishList</Tab>
        </TabList>
        <TabPanel>
          <div className="container mx-auto p-4 ">
            {readList.map((book) => (
              <ReadBook book={book} key={book.bookId}></ReadBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My WishList Content</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
