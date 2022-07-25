import React from "react";
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from './components/NasaPhoto';
import './index.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/" exact/>
      <Route element={<NasaPhoto />} path="nasaphoto" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
