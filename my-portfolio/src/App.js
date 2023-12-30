import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';

function App() {
  // Define the data for Skills and Experiences
  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "JQuery", "C"],
    "Backends & Databases": ["Node.js", "MySQL", "MongoDB"],
    "Tools": ["GitHub", "Docker", "Jira"]
  };

  const experiences = {
    "Work Experience": [
      {
        title: 'Software Engineer II',
        company: 'Brightspot',
        duration: '2 years',
        logo: `brightspot_logo.webp`,
        description: [
          'Managed end-to-end software development lifecycle.',
          'Contributed to all phases of the software development process.'
        ]
      },
      {
        title: 'Application Programmer',
        company: 'Vistashare LLC',
        duration: '3 years',
        logo: `vs_logo_lg-centered.png`,
        description: [
          'Managed end-to-end software development lifecycle.',
          'Contributed to all phases of the software development process.'
        ]
      },
    ],
    "Education": [
      {
        title: 'Bachelor of Science in Computer Science',
        company: 'University of Technology',
        duration: '2015 - 2019',
        logo: '',
        description: [
          'Specialized in software engineering.',
          'Graduated with honors.'
        ]
      },
    ],
    "Volunteering": [
      {
        title: 'Community Tech Teacher',
        company: 'Local Library',
        duration: '2018 - Present',
        logo: '',
        description: [
          'Conducted weekend tech workshops.',
          'Focused on basic programming skills.'
        ]
      },
    ]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-base-200 text-base-content">

      <AboutMe />

      <Skills skills={skills} />
      {Object.keys(experiences).map((sectionTitle) => (
        <ExperienceSection key={sectionTitle} title={sectionTitle} experiences={experiences[sectionTitle]} />
      ))}
    </div>
  );
}

export default App;
