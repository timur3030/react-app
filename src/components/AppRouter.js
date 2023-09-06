import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Navbar from "./UI/navbar/Navbar";
import PostIdPage from "../pages/PostIdPage";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Posts />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/posts",
      element: (
        <>
          <Navbar />
          <Posts />
        </>
      ),
    },
    {
      path: "/posts/:id",
      element: (
        <>
          <Navbar />
          <PostIdPage />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppRouter;
