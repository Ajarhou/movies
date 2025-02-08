/* eslint-disable no-unreachable */
import React from "react";
import { useMovieContext } from "../contexte/GlobaleState";

const ResultCard = ({ movie }) => {
  const { watchlist, watched, MoviesDispatch } = useMovieContext()
  const storedMovie = watchlist.find(
    (film) => film.imdbID === movie.imdbID
  );
  const storedMovieWatched = watched.find(
    (film) => film.imdbID === movie.imdbID
  );

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            onClick={() => {
              MoviesDispatch({
                type: "ADD_MOVIE_TO_WATCHLIST",
                payload: movie,
              });
            }}
            disabled={watchlistDisabled}
            className="btn"
          >
            Add to Watchlist
          </button>
          <button
            onClick={() => {
              MoviesDispatch({
                type: "ADD_MOVIE_TO_WATCHED",
                payload: movie,
              });
            }}
            disabled={watchedDisabled}
            className="btn"
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
