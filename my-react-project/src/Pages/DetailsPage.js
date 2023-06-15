import React from "react";
import Header from "../components/Header/Header";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import { useLocation } from "react-router-dom";
import DetailsContentContainer from "../components/DetailsContentContainer/DetailsContentContainer";

const DetailsPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <DetailsContentContainer />
    </div>
  );
};

export default DetailsPage;
