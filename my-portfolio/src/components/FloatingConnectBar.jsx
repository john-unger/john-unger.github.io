import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function FloatingConnectBar() {
    const [visible, setVisible] = useState(false);

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
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
                        right-4 bottom-4 md:right-4 md:bottom-4
                        left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0`}
        >
            <div className="bg-base-100 shadow-xl rounded-full flex gap-4 px-5 py-3 
                            items-center border border-base-300
                            transition-all duration-200 hover:shadow-2xl">
                
                {/* Main CTA */}
                <button
                    className="btn btn-primary btn-sm rounded-full shadow-md hover:shadow-xl transition-all"
                    onClick={() =>
                        document.getElementById('connect_modal').showModal()
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
            </div>
        </div>
    );
}

export default FloatingConnectBar;
