import React, { useState, useEffect } from "react";
import axios from "./axios"; // Make sure axios is correctly imported
import "./Row.css";
import Modal from "./Modal";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(
        `/movie/${movieId}/videos?api_key=114cae0d69989144e86c6f04a2d943bd`
      );
      const trailers = response.data.results;
      const youtubeTrailer = trailers.find(
        (trailer) => trailer.site === "YouTube" && trailer.type === "Trailer"
      );
      if (youtubeTrailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${youtubeTrailer.key}`);
      }
    } catch (error) {
      console.error("Failed to fetch trailer", error);
    }
  };

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    fetchTrailer(movie.id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOpenModal(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {selectedMovie && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          content={
            <div className="modal-content">
              <h2>{selectedMovie.title || selectedMovie.name}</h2>
              <p>{selectedMovie.overview}</p>
              {trailerUrl && (
                <iframe
                  width="100%"
                  height="315"
                  src={trailerUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Trailer"
                ></iframe>
              )}
            </div>
          }
        />
      )}
    </div>
  );
}

export default Row;
