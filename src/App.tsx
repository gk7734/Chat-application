import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
