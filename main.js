document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
      {
        title: 'Software Engineer II',
        company: 'Brightspot',
        duration: '2 years',
        description: 'Brief description of your role and responsibilities. Highlight key achievements or skills gained.'
      },
      {
        title: 'Job Title 2',
        company: 'Company Name',
        duration: 'Duration',
        description: 'Brief description of your role and responsibilities. Highlight key achievements or skills gained.'
      },
      {
        title: 'Job Title 3',
        company: 'Company Name',
        duration: 'Duration',
        description: 'Brief description of your role and responsibilities. Highlight key achievements or skills gained.'
      }
    ];

    const cardsContainer = document.querySelector('#cards-container');
    jobs.forEach(job => {
      cardsContainer.appendChild(createJobCard(job));
    });

    function createJobCard(job) {
      const card = document.createElement('div');
      card.className = 'card card-bordered bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out';
      card.innerHTML = `
        <div class="card-body p-6">
          <h2 class="card-title text-2xl mb-2">${job.title}</h2>
          <p class="font-semibold mb-1">${job.company}, ${job.duration}</p>
          <p class="text-sm">${job.description}</p>
        </div>
      `;
      return card;
    }
  });