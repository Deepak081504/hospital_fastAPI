import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login'; 
import Signup from "./Pages/Signup";
import Doctors from './Pages/Doctors';
import Patients from './Pages/Patients';
import Appointment from './Pages/Appointment';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;