import './App.css';
import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Layout from './Components/Layout';

const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
