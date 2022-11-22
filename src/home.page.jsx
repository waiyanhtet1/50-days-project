import "./home.css";
import React, { useState } from "react";
import FlexContainer from "./components/FlexContainer/flexContainer.component";
import Search from "./components/search/search.component";
import ButtonC from "./components/buttonC/buttonC.component";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Search search={searchValue} setSearch={setSearchValue} />

      <FlexContainer scrolling={true} gap="sm"></FlexContainer>
    </>
  );
};

export default HomePage;
