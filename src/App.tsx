import React from 'react';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {ConversationPage} from "./pages/ConversationPage";
import {ConversationChannelPage} from "./pages/ConversationChannelPage";
import {ConversationSidebar} from "./components/conversations/ConversationSidebar";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/conversations' element={<ConversationPage />}>
                      <Route path=':id' element={<ConversationChannelPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
