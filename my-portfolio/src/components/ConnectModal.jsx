import React, { useEffect, useRef, useState } from 'react';
import LinkedInBadge from './LinkedInBadge';
import { FaLinkedin, FaGithub, FaQrcode } from 'react-icons/fa';

function ConnectModal() {
    const closeRef = useRef(null);
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") closeRef.current?.click();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            {/* Trigger Button */}
            <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                    setShowQR(false);
                    document.getElementById('connect_modal').showModal();
                }}
            >
                Connect with me
            </button>

            {/* Modal */}
            <dialog id="connect_modal" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box animate-fade-in shadow-2xl">

                    <h3 className="font-bold text-xl text-center mb-6">
                        Connect with Me
                    </h3>

                    {/* Toggle Badge / QR */}
                    <div className="flex justify-center gap-6 mb-6">
                        <button
                            type="button"
                            className={`btn btn-sm ${!showQR ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setShowQR(false)}
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm ${showQR ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setShowQR(true)}
                        >
                            <FaQrcode className="mr-2" /> QR Code
                        </button>
                    </div>

                    {showQR ? (
                        /* QR CODE */
                        <div className="flex justify-center">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.linkedin.com/in/john-j-unger/"
                                alt="LinkedIn QR Code"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    ) : (
                        /* LinkedIn Badge */
                        <div className="flex justify-center">
                            <LinkedInBadge />
                        </div>
                    )}

                    {/* GitHub button */}
                    <div className="flex justify-center mt-6">
                        <a
                            href="https://github.com/john-unger"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-neutral btn-outline"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    </div>

                    {/* Close Button */}
                    <div className="modal-action">
                        <button ref={closeRef} className="btn">Close</button>
                    </div>

                </form>
            </dialog>
        </>
    );
}

export default ConnectModal;
