import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { detectDarkMode } from "../../utils/detectDarkMode";

import "./style.css";
import sun from "./sun.svg";
import moon from "./moon.svg";


const BtnDarkMode = () => {

        // useState возвращает список из 2 значений
        // const [darkMode, setDarkMode] = useState("light");
        const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

        const btnRef = useRef(null);

        // Если передавать пустой массив то useEffect не на чем не завязан и будет срабатывать только один, раз при первом рендере страницы
        // Если передать в массив значение то useEffect будет завязан на нем и будет вызываться при его изменениях и при первом старте стр.

        useEffect(() => {

                if (darkMode === "dark") {
                        document.body.classList.add("dark")
                        // current - это объект к котрому приаязан btnRef, то есть к тегу button
                        btnRef.current.classList.add("dark-mode-btn--active")
                } else {
                        document.body.classList.remove("dark")
                        btnRef.current.classList.remove("dark-mode-btn--active")
                }

        }, [darkMode]);

        const toggleDarkMode = () => {

                // Через эту функцию мы устонавливаем значение dark в переменную darkMode

                setDarkMode((curValue) => {
                        // curValue - текущее значение
                        return curValue === "light" ? "dark" : "light";
                });
        }


        return (
                <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>
        );
}

export default BtnDarkMode;