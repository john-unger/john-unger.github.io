import React from 'react';

function ExperienceCard({ data }) {
  return (
    <div className="card card-bordered bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center space-x-4 mb-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.logo} alt={`${data.company} logo`} />
            </div>
          </div>
          <h3 className="card-title text-xl">{data.title}</h3>
        </div>
        <p className="text-base-content">{data.company}, {data.duration}</p>
        <ul className="text-base list-disc list-inside">
          {data.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
