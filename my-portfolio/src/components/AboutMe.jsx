import ConnectModal from './ConnectModal';
import imagePath from './Utils';
import React from 'react';
import useReveal from "../hooks/useReveal";

function AboutMe({ summary }) {
    useReveal();

    return (
        <header className="mb-12">
            <div className="block md:flex md:items-center justify-center gap-8 text-center md:text-left">

                <div className="avatar">
                    <div className="w-40 rounded-xl">
                        <img src={imagePath("profile-picture.webp")} alt="profile pic of John Unger" />
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold mb-4">John Unger</h1>

                    <div className="hidden md:flex justify-end">
                      <label className="swap swap-rotate cursor-pointer text-xl">
                        <input
                          type="checkbox"
                          onChange={(e) => toggleTheme(e.target.checked)}
                        />
                        <FaSun className="swap-off text-yellow-400" />
                        <FaMoon className="swap-on text-blue-400" />
                      </label>
                    </div>

                    {/* Summary */}
                    <div className="text-xl leading-relaxed space-y-4 mb-6">
                        {summary?.length ? (
                            summary.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))
                        ) : (
                            <p>Software engineer passionate about building systems that serve people.</p>
                        )}
                    </div>

                    <div className="flex flex-row gap-4 mt-6 justify-center">
                        <ConnectModal />
                        <a
                            href="/John_Unger_Resume.pdf"
                            className="btn btn-outline btn-primary"
                            target="_blank"
                            rel="noopener noreferrer">Download Resume</a>
                    </div>


                </div>
            </div>
        </header>
    );
}

export default AboutMe;
