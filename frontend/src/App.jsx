import React from 'react'
import Home from './home/home';
import All from './All/All';

import {Route, Routes} from "react-router-dom";
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-books" element={<All />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App
