import CursorTracker from "./CursorTracker"; // ⬅ Імпортуємо `CursorTracker`
import styles from "./task2.module.css"; // ⬅ Підключаємо стилі

const Task2 = () => {
  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.heading}>📌 Завдання 2</h2>
      <p className={styles.text}>Відстеження позиції курсора</p>

      {/* Додаємо компонент `CursorTracker` */}
      <div className={styles.trackerContainer}>
        <CursorTracker />
      </div>
    </div>
  );
};

export default Task2;
