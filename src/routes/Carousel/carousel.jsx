import React, { useState, useEffect } from "react";
import styles from "../../css/Carousel/carousel.module.css";

const Carousel = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data.movies.slice(0, 5));
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h1>{movie.title}</h1>
          <img alt="poster" src={movie.medium_cover_image}></img>
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
