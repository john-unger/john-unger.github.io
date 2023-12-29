import React from 'react';
import ExperienceCard from './ExperienceCard';

function ExperienceSection({ title, experiences }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-9">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} data={experience} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
