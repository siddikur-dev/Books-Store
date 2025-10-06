import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ListedBooks = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>My Read List</Tab>
        <Tab>My WishList</Tab>
      </TabList>

      <TabPanel>
        <h2>My Read List Content</h2>
      </TabPanel>
      <TabPanel>
        <h2>My WishList Content</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ListedBooks;
