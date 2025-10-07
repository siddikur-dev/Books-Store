import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Components/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/books/:bookDetails",
        Component: BookDetails,
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
    ],
  },
]);
