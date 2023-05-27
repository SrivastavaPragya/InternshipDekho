import React from 'react';
import { Link } from 'react-router-dom';
import './Internships.css';
import internshipsList from './InternshipsList'; // Import the internshipsList

function Internships() {
  return (
    <div className="internship-container">
      <h1 className="internship-header">Internships</h1>
      <div className="internship-list">
        {internshipsList.map((internship) => (
          <Link to={`/internship/${internship.id}`} className="internship-card" key={internship.id}>
            <div className="internship-card-content">
              <div className="internship-card-title">{internship.title}</div>
              <div className="internship-card-details">
                <div className="internship-card-company">{internship.company}</div>
                <div className="internship-card-location">{internship.location}</div>
                <div className="internship-card-duration">{internship.duration}</div>
                <div className="internship-card-stipend">{internship.stipend}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Internships;
