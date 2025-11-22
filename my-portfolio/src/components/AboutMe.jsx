import React from 'react';
import imagePath from './Utils';
import LinkedInBadge from './LinkedInBadge';

function AboutMe({ summary }) {
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

                    {/* Contact / Social */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        {/* LinkedIn Badge */}
                        <LinkedInBadge />

                        {/* GitHub */}
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://github.com/john-unger"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm"
                                aria-label="GitHub Profile"
                            >
                                <span className="font-medium">GitHub</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default AboutMe;
