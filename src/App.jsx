import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
