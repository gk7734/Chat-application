import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RegisterPage} from "./pages/RegisterPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<RegisterPage />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
