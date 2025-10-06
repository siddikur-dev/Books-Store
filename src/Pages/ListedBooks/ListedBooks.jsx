import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../../Components/Book/Book";
import ReadBook from "../../Components/Book/ReadBook";
const ListedBooks = () => {
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
  return (
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
  );
};

export default ListedBooks;
