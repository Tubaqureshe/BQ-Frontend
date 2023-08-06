import React from 'react'
import Admin from './Admin/App'
import Users from './Users/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import GuestNav from './GuestNav';
export default function App() {

  const role = 'guest'
  return (
    <BrowserRouter>
      {
        role == 'admin' ? (<Admin />)
          :
          (
            role == 'user' ? (
              <Users />)
              :
              (
                <>
                <GuestNav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<div>Page-404</div>} />
                </Routes>
                </>
              )
          )
      }

    </BrowserRouter>
  )
}
