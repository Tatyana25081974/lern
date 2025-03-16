 
import { useState, useRef } from "react";
import styles from "./task3.module.css";

const Task3 = () => {
  const [textColor, setTextColor] = useState("red"); // Колір тексту (змінюється вперед)
  const [headingColor, setHeadingColor] = useState("pink"); // Колір заголовка (змінюється назад)
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const colors = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple", "black", "white", "pink", "cyan", "brown", "lime", "magenta"];

  // Функція запуску таймера
  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        // Змінюємо колір тексту вперед
        setTextColor((prevColor) => {
          const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
          return colors[nextIndex];
        });

        // Змінюємо колір заголовка назад
        setHeadingColor((prevColor) => {
          const prevIndex = colors.indexOf(prevColor);
          const nextIndex = prevIndex - 1 < 0 ? colors.length - 1 : prevIndex - 1;
          return colors[nextIndex];
        });

      }, 2000);
      setIsRunning(true);
    }
  };

  // Функція зупинки таймера
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.heading} style={{ color: headingColor }}>📌 Завдання 3</h2>
      <p className={styles.text} style={{ color: textColor }}>
        Колір тексту змінюється кожні 2 секунди!
      </p>

      <div className={styles.buttonContainer}>
        <button onClick={startTimer} disabled={isRunning} className={styles.button}>
          Старт
        </button>
        <button onClick={stopTimer} disabled={!isRunning} className={styles.button}>
          Стоп
        </button>
      </div>
    </div>
  );
};

export default Task3;
