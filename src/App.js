import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternshipForm from './InternshipForm';
import Internships from './Internships';
import InternshipDetails from './InternshipDetails';
import internshipsList from './InternshipsList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InternshipForm />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/internship/:id" element={<InternshipDetails internshipsList={internshipsList} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
