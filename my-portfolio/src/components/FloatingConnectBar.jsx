import React, { useEffect, useState, useContext } from "react";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../hooks/ThemeContext";

function FloatingConnectBar() {
  const [visible, setVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = theme === "emerald";

  // Scroll visibility
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
        right-4 bottom-4 md:right-4 md:bottom-4
        left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0`}
    >
      <div
        className="bg-base-100 shadow-xl rounded-full flex items-center gap-4 px-5 py-3
                   border border-base-300 transition-all duration-200 hover:shadow-2xl"
      >
        {/* Main CTA */}
        <button
          className="btn btn-primary btn-sm rounded-full shadow-md hover:shadow-xl transition-all"
          onClick={() =>
            document.getElementById("connect_modal").showModal()
          }
        >
          Connect
        </button>

        {/* Icons */}
        <a
          href="https://linkedin.com/in/john-j-unger"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/john-unger"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-primary transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>

        {/* Theme toggle (INLINE with the rest) */}
        <label className="swap swap-rotate cursor-pointer text-xl">
          <input
            type="checkbox"
            checked={isLightTheme}
            onChange={toggleTheme}
            aria-label="Toggle site theme"
          />
          {/* swap-off shows when NOT checked, swap-on when checked */}
          <FaSun className="swap-off text-yellow-400" />
          <FaMoon className="swap-on text-blue-400" />
        </label>
      </div>
    </div>
  );
}

export default FloatingConnectBar;
