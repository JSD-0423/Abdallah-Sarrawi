import React from "react";
import Header from "../components/Header/Header";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import ContentContainer from "../components/ContentContainer/ContentContainer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <ContentContainer />
    </div>
  );
};

export default HomePage;
