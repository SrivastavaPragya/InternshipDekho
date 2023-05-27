import React from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import internshipsList from './InternshipsList';

const InternshipDetails = () => {
  const { id } = useParams();

  // Find the internship based on the id
  const internship = internshipsList.find((internship) => internship.id === parseInt(id));

  if (!internship) {
    return <div>Internship not found</div>;
  }

  return (
    <div className="internship-details-container">
      <h2 className="internship-details-title">{internship.title}</h2>
      <p className="internship-details-company">{internship.company}</p>
      <p className="internship-details-description">{internship.description}</p>
    </div>
  );
};

export default InternshipDetails;