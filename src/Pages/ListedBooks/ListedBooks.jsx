import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import ReadBook from "../../Components/Book/ReadBook";
const ListedBooks = () => {
  //sort set readList Book Data
  const [sort, setSort] = useState("");

  //state set readList Book Data
  const [readList, setReadList] = useState([]);
  const booksData = useLoaderData();
  useEffect(() => {
    const storedBook = getStoredBook();
    const myReadList = booksData.filter((book) =>
      storedBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
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
  return (
    <>
      <details className="dropdown">
        <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <p onClick={() => handleSort("pages")}>Pages</p>
          </li>
          <li>
            <p onClick={() => handleSort("rating")}>Ratings</p>
          </li>
        </ul>
      </details>
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
    </>
  );
};

export default ListedBooks;
