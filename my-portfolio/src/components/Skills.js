import React from 'react';

function Skills({ skills }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 gap-9">
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-4">
            <h3 className="font-semibold text-lg mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <span key={skill} className="badge badge-outline">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
