import React, { useState } from 'react';
import './InternshipForm.css';

function InternshipForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, phone, linkedin, github };
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = '/internships';
  };

  return (
    <div className="internship-form-container">
      <h1 className="internship-form-header">Internship Dekho</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            onChange={(event) => setLinkedin(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={github}
            onChange={(event) => setGithub(event.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InternshipForm;
