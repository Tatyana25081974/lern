import { useRef } from "react";
import "./Player.module.css"; // Підключаємо CSS

const Player = ({ videoSource, audioSource }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // Функції для керування відео
  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  // Функції для керування аудіо
  const playAudio = () => audioRef.current.play();
  const pauseAudio = () => audioRef.current.pause();

  return (
    <div className="player-container">
      <h2 style={{ color: "white" }}>🎥 Відеоплеєр</h2>
      <video ref={videoRef} src={videoSource} controls={false}>
        Ваш браузер не підтримує відео.
      </video>
      <div className="controls">
        <button className="play-video" onClick={playVideo}>▶ Play Video</button>
        <button className="pause-video" onClick={pauseVideo}>⏸ Pause Video</button>
      </div>

      <h2 style={{ color: "white" }}>🎵 Аудіоплеєр</h2>
      <audio ref={audioRef} src={audioSource} />
      <div className="controls">
        <button className="play-audio" onClick={playAudio}>▶ Play Audio</button>
        <button className="pause-audio" onClick={pauseAudio}>⏸ Pause Audio</button>
      </div>
    </div>
  );
};

export default Player;