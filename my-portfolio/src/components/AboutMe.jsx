import React, { useContext } from "react";
import ConnectModal from "./ConnectModal";
import imagePath from "./Utils";
import useReveal from "../hooks/useReveal";
import { ThemeContext } from "../hooks/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function AboutMe({ summary }) {
  useReveal();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLightTheme = theme === "emerald";

  return (
    <header className="mb-12">
      <div className="block md:flex md:items-center justify-center gap-8 text-center md:text-left">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-40 rounded-xl">
            <img
              src={imagePath("profile-picture.webp")}
              alt="profile pic of John Unger"
            />
          </div>
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-5xl font-bold mb-4">John Unger</h1>

          {/* Theme toggle (desktop) */}
          <div className="hidden md:flex justify-end mb-4">
            <label className="swap swap-rotate cursor-pointer text-xl">
              <input
                type="checkbox"
                checked={isLightTheme}
                onChange={toggleTheme}
                aria-label="Toggle site theme"
              />
              {/* DaisyUI: swap-off shows when NOT checked, swap-on when checked */}
              <FaSun className="swap-off text-yellow-400" />
              <FaMoon className="swap-on text-blue-400" />
            </label>
          </div>

          {/* Summary */}
          <div className="text-xl leading-relaxed space-y-4 mb-6">
            {summary?.length ? (
              summary.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
            ) : (
              <p>
                Software engineer passionate about building systems that serve
                people.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-row gap-4 mt-6 justify-center">
            <ConnectModal />
            <a
              href="/John-Unger-Resume.pdf"
              className="btn btn-outline btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutMe;
