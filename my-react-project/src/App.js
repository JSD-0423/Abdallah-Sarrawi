import React, { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import Header from "./components/Header/Header";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";

function App() {
  // const router = createBrowserRouter({ basename: "/Abdallah-Sarrawi" }, [
  //   { index: true, element: <HomePage /> },
  //   { path: "Details", element: <DetailsPage /> },
  // ]);

  return (
    <BrowserRouter basename="/Abdallah-Sarrawi">
      <Header />
      <WelcomeMessage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      {/* <RouterProvider router={router} />; */}
    </BrowserRouter>
  );
}

export default App;
