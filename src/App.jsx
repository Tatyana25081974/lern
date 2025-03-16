import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Player from "./components/Player";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import "./App.css"; // 🔹 Підключаємо стилі

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">🏠 Головна</Link>
        <Link to="/task2">📌 Завдання 2</Link>
        <Link to="/task3">📌 Завдання 3</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Player 
            videoSource="http://media.w3.org/2010/05/sintel/trailer.mp4"
            audioSource="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
          />} />
          <Route path="/task2" element={<div className="content"><Task2 /></div>} />
          <Route path="/task3" element={<div className="content"><Task3 /></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
