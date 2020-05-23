import React from "react";
import { Homepage, AddBook, Goodreads, Detay, Reads} from "./containers";

const routes = [
  {
    title: "Home Page",
    path: "/",
    exact: true,
    componentProps: {
    },
    component: Homepage,
  },
  {
    title: "Add Book",
    path: "/add-book",
    exact: false,
    componentProps: {
    },
    component: AddBook,
  },
  {
    title: "Edit Book",
    path: "/edit-book/:id",
    exact: false,
    componentProps: {
      isEdit: true
    },
    component: AddBook
  },
  {
    title: "Goodreads",
    path: "/goodreads/:id",
    exact: false,
    componentProps: {
    },
    component: Goodreads
  },
  {
    title: "Details",
    path: "/details/:id",
    exact: false,
    componentProps:{
    },
    component: Detay
  },
  {
    title: "Read Books",
    path: "/read-books",
    exact: true,
    componentProps: {
    },
    component: Reads,
  },
];

export default routes;
