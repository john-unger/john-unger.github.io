import React from 'react';
import imagePath from './Utils';

function AboutMe() {
    return (
        <header className="mb-12">
            <div className="block md:flex md:items-center justify-center gap-8 text-center md:text-left">
                <div className="md:hidden">
                    <h1 className="text-5xl font-bold mb-4">John Unger</h1>
                </div>
                <div className="avatar">
                    <div className="w-40 rounded-xl">
                        <img src={imagePath("profile-picture.webp")} alt="profile pic of John Unger" />
                    </div>
                </div>
                <div>
                    <h1 className="hidden md:block text-5xl font-bold mb-4">John Unger</h1>
                    <p className="text-xl leading-relaxed">
                        I am driven by a deep passion for stewarding technology to serve and empower people, ensuring that software is not just functional but truly impactful. With nearly five years of experience in software development, I specialize in architecting scalable backend systems, optimizing performance, and enhancing user experiences. <br />
                        My background in Computer Science (B.S.) and Business Administration (MBA) uniquely equips me to bridge the gap between technical excellence and strategic vision. Whether refactoring legacy code, designing robust APIs, or mentoring engineers, I approach each challenge with creativity, precision, and a relentless pursuit of improvement. <br />
                        I thrive in collaborative environments, enjoy sharing knowledge, and take pride in helping teams achieve their goals through technology.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default AboutMe;
