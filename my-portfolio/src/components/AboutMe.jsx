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
                        Hello, my name is John Unger, and I am ambitious to steward our computer's function for the best as a
                        Software Developer. <br />
                        A conscientious and creative thinking software developer for almost 5 years with a strong work ethic and
                        positive attitude. I learn new material quickly and possess excellent analytical abilities. Enjoy
                        helping others achieve their goals and sharing knowledge.
                    </p>
                </div>
            </div>
        </header>
    );
}

export default AboutMe;
