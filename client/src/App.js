import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route 
        exact path="/" 
        render={props => {
          return <MovieList {...props} setMovies={setMovies} />
        }}
      />
      <Route
        exact path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
        path="/update-movie/:id" 
        render={props => {
          return <UpdateMovieForm {...props} movies={movies} />
        }}
      />
    </>
  );
};

export default App;
