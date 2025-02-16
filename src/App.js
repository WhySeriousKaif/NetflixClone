import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import Signup from "./Signup";

Modal.setAppElement("#root"); // Set the root element for accessibility

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav");
      if (window.scrollY > 50) {
        nav.style.opacity = "0";
      } else {
        nav.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlay = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <div className="nav">Navigation Bar</div>
        <button onClick={handlePlay}>Play</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Trailer Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button onClick={closeModal} className="modal-close">
            X
          </button>
          <video width="600" controls>
            <source src="trailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
