import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';

function App() {
  // Define the data for Skills and Experiences
  const skills = {
    "Programming Languages": ["Java", "Python", "C", "JavaScript", "JQuery"],
    "Backends & Databases": ["SQL", "Postgres", "MySQL", "Docker", "Dari", "Django", "SpringBoot",],
    "Tools": ["GitHub", "Agile", "Jira"]
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
          'Design and develop new functionality with RESTful API calls and object-oriented programming in Django according to priorities with the most important features',
          'Maintained legacy code, refactored common customer uses, and optimized queries for a more seamless user experience',
          'Pursued a self-explanatory user interface in functional design sessions',
          'Guaranteeing common functionality with continuous improvement of an end-to-end testing framework using selenium, including reports, parallel and distributed functionality, and more'
        ]
      },
    ],
    "Education": [
      {
        title: 'Master in Business Administration',
        company: 'The Master\'s University',
        duration: 'Graduated 2023',
        logo: '',
        description: [
          'Gained a foundation in business practice'
        ]
      },
      {
        title: 'Bachelor of Science in Computer Science',
        company: 'James Madison University',
        duration: 'Graduated 2017',
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
