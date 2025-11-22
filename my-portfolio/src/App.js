import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';

function App() {

  const summary = [
    "I care about software that serves people. I am a backend-focused software engineer who designs scalable services, sets reusable standards, and grows teams.",
    "With 7+ years of experience in distributed systems and a B.S. in Computer Science + MBA, I connect architecture decisions to business outcomes.",
    "I thrive in collaborative environments, share knowledge freely, and continually refine systems—and teams—to raise the bar."
  ];

  const skills = {
    "Soft Skills": [
      "Leadership", "Problem-Solving", "Mentorship", "Technical Communication",
      "Cross-Team Collaboration", "API Governance", "Reliability & Observability"
    ],
    "Programming Languages": [
      "Java", "Python", "Kotlin", "C", "JavaScript", "TypeScript", "SQL", "JQuery"
    ],
    "Backends & Databases": [
      "Django", "Spring Boot", "Node.js", "GraphQL", "Brightspot/Dari",
      "SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, Lambda, Translate)", "Kubernetes", "Docker",
      "CI/CD Pipelines", "GitHub Actions", "Terraform"
    ],
    "Frontend Technologies": [
      "React", "HTML", "CSS", "Next.js"
    ],
    "Testing & Automation": [
      "Selenium", "JUnit", "PyTest"
    ],
    "Tools & Methodologies": [
      "GitHub", "Git", "Agile", "Scrum", "Jira",
      "Release Engineering", "Data Ingestion/ETL", "Caching Strategies"
    ]
  };

  const experiences = {
    "Work Experience": [
      {
        title: 'Senior Software Engineer',
        company: 'Brightspot',
        duration: 'January 2022 - November 2025 · Remote',
        logo: `brightspot_logo.webp`,
        description: [
          "Shape backend architecture and API conventions across the Amazon program (6+ concurrent projects), with standards adopted across Shipping & Freight, Jobs, and Design teams.",
          "Lead CMS backend delivery across ~40 custom projects powering 132 live sites in 2024 (+32% YoY), supporting $2.9M ARR (+19%) and $3.5M services revenue (+9%).",
          "Serve as lead backend engineer for Amazon Jobs and Griffin Media; primary contributor for Amazon Science, Amazon About, Buy with Prime, and other Amazon properties.",
          "Improve reliability & DevEx through release automation, UAT workflows, GraphQL schema warm-ups, and elimination of org-wide build failures.",
          "Automated Jira workflows improving ticket throughput by 25% and reducing manual QA processes.",
          "Refactor legacy systems to reduce technical debt, improve scalability, and raise bar on monitoring/observability.",
          "Mentor engineers and interns — including delivery of fully intern-driven features to prod.",
          "Document standards and templates so repeatable features ship in hours, not days."
        ]
      },
      {
        title: 'Application Programmer',
        company: 'Vistashare LLC',
        duration: '2018 – 2021 · Harrisonburg, VA',
        logo: `vs_logo_lg-centered.png`,
        description: [
          "Designed and developed new product features using Django and RESTful APIs.",
          "Refactored legacy flows to improve maintainability and performance, reducing load times by 60%.",
          "Led functional design sessions to improve UI clarity and customer experience.",
          "Built automated end-to-end test coverage using Selenium across distributed environments."
        ]
      },
    ],
    "Selected Projects": [
      {
        title: 'Amazon Jobs – Global Careers Platform',
        company: 'Brightspot',
        duration: '2022 – Present',
        logo: 'brightspot_logo.webp',
        description: [
          "Acted as backend tech lead (1,000+ commits).",
          "Migrated to modern stack with improved stability and SEO parity.",
          "Designed Ownership Group content governance model enabling flexible editorial permissions."
        ]
      },
      {
        title: 'Griffin Media – Live News Broadcast Platform',
        company: 'Brightspot',
        duration: '2025',
        logo: 'brightspot_logo.webp',
        description: [
          "Delivered Weather API middleware w/ fallback provider orchestration.",
          "Built Breaking News banner system and ViewNexa livestream rendering.",
          "Enabled reliable election data ingestion + external rendering integrations."
        ]
      },
      {
        title: 'Amazon Science – Research Publishing Platform',
        company: 'Brightspot',
        duration: '2023 – 2024',
        logo: 'brightspot_logo.webp',
        description: [
          "Implemented ingestion pipelines to normalize metadata into S3-backed content models.",
          "Extended content types and GraphQL schema coverage for editorial flexibility."
        ]
      },
      {
        title: 'Amazon Buy with Prime – AI-Assisted Services',
        company: 'Brightspot',
        duration: '2024 – 2025',
        logo: 'brightspot_logo.webp',
        description: [
          "Integrated ML-backed workflows with deterministic fallback behavior.",
          "Improved merchant UX via guarded automation w/ safe degradation."
        ]
      }
    ],
    "Education": [
      {
        title: 'Master in Business Administration (MBA)',
        company: 'The Master\'s University',
        duration: 'Graduated 2023',
        logo: 'MastersU_Seal.png',
        description: [
          'Leadership, Operations Management, Corporate Finance, Marketing Strategy, IT Management'
        ]
      },
      {
        title: 'B.S., Computer Science (Minor: Mathematics)',
        company: 'James Madison University',
        duration: 'Graduated 2017',
        logo: 'JMU-block-RGB-purple-square.png',
        description: [
          'Software Engineering, Database Design, Algorithms & Data Structures, Parallel & Distributed Systems'
        ]
      }
    ],
    "Volunteering": [
      {
        title: 'Media Consultant / Operator',
        company: 'Crosslink Community Church',
        duration: '2011 - 2020',
        logo: 'crosslink-logo.png',
        description: [
          "Troubleshot live production A/V systems, operated cameras and switching equipment.",
          "Directed live content and mentored new volunteers."
        ]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-base-200 text-base-content">

      <AboutMe summary={summary} />

      <Skills skills={skills} />

      {Object.keys(experiences).map((sectionTitle) => (
        <ExperienceSection key={sectionTitle} title={sectionTitle} experiences={experiences[sectionTitle]} />
      ))}
    </div>
  );
}

export default App;
