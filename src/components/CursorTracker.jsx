import { useState, useRef } from "react";
import styles from "./CursorTracker.module.css";

const CursorTracker = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const divRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect(); // Отримуємо позицію div
        const x = event.clientX - rect.left; // Координати X всередині div.  вони дають нам координати курсора на всій сторінці.позиція курсора – лівий край div
        const y = event.clientY - rect.top; // Координати Y всередині div. позиція курсора – верхній край div

        setCoords({ x, y });//  Оновлюємо стан coords, що викликає перерендер і оновлює текст у div.
    };
    
    //🔹 ref={divRef} – передаємо посилання на div, щоб потім дізнатися його позицію.
    // onMouseMove={handleMouseMove} – запускаємо handleMouseMove, коли курсор рухається по div.
    // Відображаємо x, y, які змінюються в реальному часі.
    return (
        <div ref={divRef} className={styles.tracker} onMouseMove={handleMouseMove}>
            <p>Координати курсора:</p>
            <p>
                X: <span>{Math.round(coords.x)}</span>, Y: <span>{Math.round(coords.y)}</span>
            </p>
        </div>
    );
};

export default CursorTracker;  


//Елемент	Опис
//useRef(null)	Зберігає посилання на div
//onMouseMove	Викликається при русі миші всередині div
//event.clientX	Абсолютна координата курсора на сторінці (по X)
//event.clientY	Абсолютна координата курсора на сторінці (по Y)
//getBoundingClientRect()	Отримує координати div відносно вікна
//x = event.clientX - rect.left	Вираховуємо x всередині div
//y = event.clientY - rect.top	Вираховуємо y всередині div
//useState({x, y})	Зберігає координати x, y та оновлює при кожному русі
