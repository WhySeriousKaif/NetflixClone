import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const truncate = (string, n) => {
    if (!string) return "";
    return string.length > n
      ? string.substring(0, string.lastIndexOf(" ", n)) + "..."
      : string;
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => alert(`Playing ${movie?.title || movie?.name}`)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              alert(`Playing ${movie?.title || movie?.name}`)
            }
          >
            ▶ Play
          </button>
          <button
            className="banner__button"
            onClick={() => console.log("Added to My List:", movie)}
            onKeyDown={(e) =>
              e.key === "Enter" && console.log("Added to My List:", movie)
            }
          >
            + My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
