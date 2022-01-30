import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import { Home } from './screens/';
import { CompanyQuestionnarie } from './questionnaires';
import { useEffect } from 'react';
import { useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

function App() {
  return (
    <Router>
      <Routes>
        {/* two routes,
        First is HomePage to navigate to different questionnaries
        Second is to display the questions
          */}
        <Route path='/' element={<Home />} />

        <Route path='questionaries/:id' element={<CompanyQuestionnarie />} />
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
