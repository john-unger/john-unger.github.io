import React from 'react';
import imagePath from './Utils';
import ConnectModal from './ConnectModal';

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

                    <div className="mt-8 flex justify-start">
                        <ConnectModal />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default AboutMe;
