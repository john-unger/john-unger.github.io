document.addEventListener("DOMContentLoaded", function () {
  const jobs = [
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
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "1 year",
      logo: "static/vs_logo_lg-centered.png", // Replace with actual logo path
      description: [
        "Developed and maintained web applications.",
        "Used a variety of coding languages and frameworks.",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Startup Hub",
      duration: "1.5 years",
      logo: "path/to/startup-hub-logo.png", // Replace with actual logo path
      description: [
        "Participated in the design and creation of scalable software.",
        "Wrote clean, functional code on the front- and back-end.",
      ],
    },
  ];

  const cardsContainer = document.querySelector('#cards-container');
  const template = document.querySelector('#job-card-template').content;
  const fragment = document.createDocumentFragment();

  jobs.forEach(job => {
    const cardClone = document.importNode(template, true);
    cardClone.querySelector('img').src = job.logo;
    cardClone.querySelector('img').alt = `${job.company} logo`;
    cardClone.querySelector('.card-title').textContent = job.title;
    cardClone.querySelector('.text-base-content').textContent = `${job.company}, ${job.duration}`;
    const ul = cardClone.querySelector('ul');
    job.description.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      ul.appendChild(li);
    });
    fragment.appendChild(cardClone);
  });

  cardsContainer.appendChild(fragment);
});
