import React from 'react'
import darkPng from "../../assets/mode_dark.png"
import lightPng from "../../assets/mode_light.png"
const DarkMode = () => {
    //Recuerda Preguntar sobre esta F#
    const [theme, setTheme] = React.useState
    (localStorage.getItem("theme")?
localStorage.getItem("theme"):"light");

    const elemento = document.documentElement;

    React.useEffect(() =>{
        if(theme === "dark"){
            elemento.classList.add("dark");
            localStorage.setItem("theme", "dark");

        }else{
            elemento.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme =() =>{
        if(theme === "light"){
            setTheme("dark");

        }else{
            setTheme("light");
        }
    }

  return (
    <div>
      <div className='relative'>
        <img src={darkPng} alt='' onClick={changeTheme} className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[
        1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300
        ${
            theme !== "dark" ? "opacity-0"
            : "opacity-100"
        }`}/> 
        <img src={lightPng} alt='' onClick={changeTheme} className='w-12 drop-shadow-[
        1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300'/>
      </div>
    </div>
  )
}

export default DarkMode
