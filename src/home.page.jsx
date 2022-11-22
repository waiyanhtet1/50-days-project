import "./home.css";
import React, { useState } from "react";
import FlexContainer from "./components/FlexContainer/flexContainer.component";
import Search from "./components/search/search.component";
import ButtonC from "./components/buttonC/buttonC.component";
import MovieCard from "./components/moviecard/moviecard.component";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const addFav = (id, image) => {};

  return (
    <>
      <Search search={searchValue} setSearch={setSearchValue} />

      <FlexContainer scrolling={true} gap="sm">
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          buttonC={{
            onClick: () => addFav("1", "dsfsdf"),
            children: "Add to Fav ❤️",
          }}
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          buttonC={{
            onClick: () => addFav("1", "dsfsdf"),
            children: "Add to Fav ❤️",
          }}
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          buttonC={{
            onClick: () => addFav("1", "dsfsdf"),
            children: "Add to Fav ❤️",
          }}
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          buttonC={{
            onClick: () => addFav("1", "dsfsdf"),
            children: "Add to Fav ❤️",
          }}
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          buttonC={{
            onClick: () => addFav("1", "dsfsdf"),
            children: "Add to Fav ❤️",
          }}
        />
      </FlexContainer>
    </>
  );
};

export default HomePage;
