// Define the data for Skills
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
  ],
  "Education": [
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
  ],
  "Volunteering": [
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
  ]
};


// Utility Functions
function populateSkills() {
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

function populateExperiences() {
  const mainContainer = document.querySelector('.container');
  const sectionTemplate = document.querySelector('#experience-card-template').content;

  for (const sectionTitle in experiences) {
      const sectionClone = document.importNode(sectionTemplate, true);
      sectionClone.querySelector('h2').textContent = sectionTitle;
      const cardsContainer = sectionClone.querySelector('div.grid');

      experiences[sectionTitle].forEach(item => {
          const card = createExperienceCard(item);
          cardsContainer.appendChild(card);
      });

      mainContainer.appendChild(sectionClone);
  }
}

function createExperienceCard(data) {
  const cardTemplate = document.querySelector('#experience-card-template').content;
  const cardClone = document.importNode(cardTemplate, true);

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

  return cardClone;
}

document.addEventListener("DOMContentLoaded", function () {
  populateSkills();
  populateExperiences();
});
