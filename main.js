document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
      {
        title: 'Software Engineer II',
        company: 'Brightspot',
        duration: '2 years',
        description: 'Managed end-to-end software development lifecycle and contributed to all phases of the software development process.'
      },
      {
        title: 'Full Stack Developer',
        company: 'Tech Innovations Inc.',
        duration: '1 year',
        description: 'Developed and maintained web applications using a variety of coding languages and frameworks.'
      },
      {
        title: 'Junior Software Developer',
        company: 'Startup Hub',
        duration: '1.5 years',
        description: 'Participated in the design and creation of scalable software, writing clean, functional code on the front- and back-end.'
      }
    ];

    const cardsContainer = document.querySelector('#cards-container');
    jobs.forEach(job => {
      cardsContainer.appendChild(createJobCard(job));
    });

    function createJobCard(job) {
      const card = document.createElement('div');
      card.className = 'card card-bordered bg-base-100 shadow-xl';
      card.innerHTML = `
        <div class="card-body">
          <h2 class="card-title text-xl">${job.title}</h2>
          <p class="text-base-content">${job.company}, ${job.duration}</p>
          <p class="text-base">${job.description}</p>
        </div>
      `;
      return card;
    }
  });