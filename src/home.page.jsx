import "./home.css";
import React, { useEffect, useState } from "react";
import FlexContainer from "./components/FlexContainer/flexContainer.component";
import Search from "./components/search/search.component";
import ButtonC from "./components/buttonC/buttonC.component";
import MovieCard from "./components/moviecard/moviecard.component";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=73e90078`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    const favouriteMovies = JSON.parse(
      localStorage.getItem("favourite-movie-list")
    );
    setFavorites(favouriteMovies);
  }, []);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavHandler = (id, image) => {
    const movieList = [...favorites, { id, image }];
    setFavorites(movieList);
    localStorage.setItem("favourite-movie-list", JSON.stringify(movieList));
  };

  const removeFavHandler = (id) => {
    const removedMovies = favorites.filter((fav) => fav.id !== id);
    setFavorites(removedMovies);
    localStorage.setItem("favourite-movie-list", JSON.stringify(removedMovies));
  };

  return (
    <>
      <FlexContainer justify="spaceBetween">
        <h1>Movies</h1>
        <Search search={searchValue} setSearch={setSearchValue} />
      </FlexContainer>

      <FlexContainer scrolling={true} gap="sm">
        {movies.map((movie, i) => (
          <MovieCard
            key={i}
            image={movie.Poster}
            buttonC={{
              onClick: () => addFavHandler(movie.imdbID, movie.Poster),
              children: "Add to Fav ❤️",
            }}
          />
        ))}
      </FlexContainer>

      <FlexContainer>
        <h1>Favourites</h1>
      </FlexContainer>

      <FlexContainer scrolling={true} gap="sm">
        {favorites.map((fav, i) => (
          <MovieCard
            key={i}
            image={fav.image}
            buttonC={{
              onClick: () => removeFavHandler(fav.id),
              children: "Remove to Fav ❌",
            }}
          />
        ))}
      </FlexContainer>
    </>
  );
};

export default HomePage;
