import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieUpload from './screens/movieupload.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<App/>}/>
        <Route path="/upload" element={<MovieUpload/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
