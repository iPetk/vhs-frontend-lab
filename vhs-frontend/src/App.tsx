import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Explore from './pages/Explore';
import VHS from './pages/VHS';
import Edit from './pages/Edit';
import CreateNew from './pages/CreateNew';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/:movieid" element={<VHS />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<CreateNew />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
