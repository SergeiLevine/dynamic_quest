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
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(!loading);
    // }, 3000);
  }, [loading]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='questionaries/:id' element={<CompanyQuestionnarie />} />
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
