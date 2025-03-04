import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';

function App() {
  // Define the data for Skills and Experiences
  const skills = {
    "Soft Skills": ["Leadership", "Problem-Solving", "Mentorship", "Technical Communication", "Cross-Team Collaboration"],
    "Programming Languages": ["Java", "Python", "C", "JavaScript", "TypeScript", "JQuery"],
    "Backends & Databases": ["Django", "Spring Boot", "Node.js", "SQL", "PostgreSQL", "MySQL", "Dari", "MongoDB", "Redis"],
    "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Kubernetes", "Docker", "CI/CD Pipelines", "Terraform"],
    "Frontend Technologies": ["React", "HTML", "CSS", "Next.js"],
    "Testing & Automation": ["Selenium", "JUnit", "PyTest"],
    "Tools & Methodologies": ["GitHub", "Git", "Agile", "Scrum", "Jira"]
  };

  const experiences = {
    "Work Experience": [
      {
        title: 'Senior Software Engineer',
        company: 'Brightspot',
        duration: 'January 2022 - Present',
        logo: `brightspot_logo.webp`,
        description: [
          "Led backend architecture and development for enterprise CMS solutions, driving a 32% YoY increase in live sites (132 total in 2024)",
          "Refactored and modernized legacy codebases, reducing technical debt and improving platform scalability for Amazon teams",
          "Architected and deployed solutions contributing to $2.9M in 2024 ARR (19% increase YoY) and $3.5M in services revenue (9% increase YoY)",
          "Enhanced API integrations to align with customer needs for analytics, SEO tools, and content automation, increasing feature adoption and engagement",
          "Collaborated with team leads to improve workflow automation in Jira, achieving a 25% increase in ticket processing efficiency and reducing manual workload",
          "Supported Amazon's content centralization initiative, streamlining collaboration across Amazon Transportation, Prime Video, AWS, and other teams",
          "Mentored junior engineers and onboarded new hires, enhancing development efficiency and ensuring high project success rates",
          "Led front-end flexibility initiatives to enhance CMS usability, positioning Brightspot as a strong competitor against Adobe, Webflow, and Amazon's in-house CMS (Lego)"
        ]
      },
      {
        title: 'Application Programmer',
        company: 'Vistashare LLC',
        duration: '3 years',
        logo: `vs_logo_lg-centered.png`,
        description: [
          'Designed and developed new features using Django, implementing RESTful API calls and object-oriented programming to enhance core product functionality',
          'Refactored and rebuilt legacy functionality using the Django framework, improving system maintainability, scalability, and performance',
          'Optimized database queries and modernized data access patterns, reducing load times by 60% and enhancing efficiency',
          'Led functional design sessions to create a self-explanatory user interface, enhancing usability and customer experience',
          'Developed and maintained an automated end-to-end testing framework with Selenium, improving test coverage and ensuring reliability across parallel and distributed environments'
        ]
      },
    ],
    "Education": [
      {
        title: 'Master in Business Administration (MBA)',
        company: 'The Master\'s University',
        duration: 'Graduated 2023',
        logo: 'MastersU_Seal.png',
        description: [
          'Coursework in Leadership, Operations Management, Corporate Finance, Marketing Strategy, IT Management',
          'Developed team leadership, strategic decision-making, and business acumen to enhance software development and project management',
          'Gained expertise in managing cross-functional teams, optimizing workflows, and aligning technical projects with business objectives'
        ]
      },
      {
        title: 'Bachelor of Science in Computer Science, Minor in Mathematics',
        company: 'James Madison University',
        duration: 'Graduated 2017',
        logo: 'JMU-block-RGB-purple-square.png',
        description: [
          'Coursework in Software Engineering, Database Design, Algorithms & Data Structures, Parallel & Distributed Systems, Embedded Systems',
          'Gained expertise in software architecture, programming languages, and database management',
          'Developed skills in autonomous robotics, computer systems, and algorithm optimization',
          'Applied mathematical foundations (Calculus, Linear Algebra, Discrete Structures) to problem-solving in software development'
        ]
      },
    ],
    "Volunteering": [
      {
        title: 'Media Consultant / Operator',
        company: 'Crosslink Community Church',
        duration: '2011 - 2020',
        logo: 'crosslink-logo.png',
        description: [
          "Provided real-time troubleshooting for software and hardware issues, ensuring seamless live events and broadcasts",
          "Collaborated with a media production team to operate and maintain audio-visual equipment for weekly services",
          "Directed and managed live presentations, camera operations, and visual content for worship sessions and sermons",
          "Trained and mentored new volunteers in media operations, improving overall team efficiency and production quality"
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
