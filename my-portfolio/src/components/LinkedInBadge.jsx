import React, { useEffect, useRef } from 'react';

function LinkedInBadge() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Prevent duplicate script injections
        const existingScript = document.querySelector(
            'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://platform.linkedin.com/badges/js/profile.js";
            script.async = true;
            script.defer = true;
            script.type = "text/javascript";
            document.body.appendChild(script);
        } else {
            // If script already loaded → rebuild badge UI
            window.LI && window.LI.parse && window.LI.parse(containerRef.current);
        }
    }, []);

    return (
        <div ref={containerRef} className="flex justify-center md:justify-start">
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="john-j-unger"
                data-version="v1"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://www.linkedin.com/in/john-j-unger?trk=profile-badge"
                >
                    John Unger
                </a>
            </div>
        </div>
    );
}

export default LinkedInBadge;
