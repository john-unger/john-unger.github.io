// Define the data for Skills
const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "JQuery", "C"],
  "Backends & Databases": ["Node.js", "MySQL", "MongoDB"],
  "Tools": ["GitHub", "Docker", "Jira"]
};

// Mock Data for Work Experience, Education, Volunteering
const workExperience = [
  {
    title: 'Software Engineer II',
    company: 'Brightspot',
    duration: '2 years',
    logo: 'static/brightspot_logo.webp',
    description: [
      'Managed end-to-end software development lifecycle.',
      'Contributed to all phases of the software development process.'
    ]
  },
  {
    title: 'Application Programmer',
    company: 'Vistashare LLC',
    duration: '3 years',
    logo: "static/vs_logo_lg-centered.png",
    description: [
      'Managed end-to-end software development lifecycle.',
      'Contributed to all phases of the software development process.'
    ]
  },
];

const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    duration: '2015 - 2019',
    logo: 'static/university_logo.png',
    description: [
      'Specialized in software engineering.',
      'Graduated with honors.'
    ]
  },
  // ... additional education items ...
];

const volunteering = [
  {
    title: 'Community Tech Teacher',
    company: 'Local Library',
    duration: '2018 - Present',
    logo: 'static/library_logo.png',
    description: [
      'Conducted weekend tech workshops.',
      'Focused on basic programming skills.'
    ]
  },
  // ... additional volunteering items ...
];

// Utility Functions
function populateSkills(skills) {
  const container = document.querySelector('#skills-container');
  const template = document.querySelector('#skill-category-template').content;

  for (const category in skills) {
    const categoryClone = document.importNode(template, true);
    categoryClone.querySelector('h3').textContent = category;
    const badgeContainer = categoryClone.querySelector('.flex');
    skills[category].forEach(skill => {
      const span = document.createElement('span');
      span.className = 'badge badge-outline';
      span.textContent = skill;
      badgeContainer.appendChild(span);
    });
    container.appendChild(categoryClone);
  }
}

function populateSection(dataArray, containerId, templateId) {
  const container = document.querySelector(`#${containerId}`);
  const template = document.querySelector(`#${templateId}`).content;
  const fragment = document.createDocumentFragment();

  dataArray.forEach(data => {
    const cardClone = document.importNode(template, true);
    cardClone.querySelector('img').src = data.logo;
    cardClone.querySelector('img').alt = `${data.company} logo`;
    cardClone.querySelector('.card-title').textContent = data.title;
    cardClone.querySelector('.text-base-content').textContent = `${data.company}, ${data.duration}`;
    const ul = cardClone.querySelector('ul');
    data.description.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
    fragment.appendChild(cardClone);
  });

  container.appendChild(fragment);
}

// Event Listener
document.addEventListener("DOMContentLoaded", function () {
  populateSkills(skills);
  populateSection(workExperience, 'work-experience-container', 'experience-card-template');
  populateSection(education, 'education-container', 'experience-card-template');
  populateSection(volunteering, 'volunteering-container', 'experience-card-template');
});
