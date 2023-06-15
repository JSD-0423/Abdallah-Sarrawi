import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/details",
      element: <DetailsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
