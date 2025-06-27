import React from 'react'
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import utils from '../lib/utils';
const ThemeToggle = () => {

    const [isDark, setisDark] = useState(false);

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if(storedTheme === "dark"){
        setisDark(true);
        document.documentElement.classList.add("dark");
      }else{
        setisDark(false);
        document.documentElement.classList.remove("dark");
      }
    }, [])
    

    const toggleTheme = () => {
        if(isDark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setisDark(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setisDark(true);
        }
    }

  return (
    <div>
      <button onClick={toggleTheme} className={utils("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition colors duration-3","focus:outline-hidden")}>
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900"/>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle
