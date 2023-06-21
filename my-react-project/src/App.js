import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
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

  return (
    <div>
      <Header />
      <WelcomeMessage />
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
