import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Home from './component/Home'
import Comments from './component/Comments'

export default function App() {
  const [feedbacks, setFeedbacks] = useState([])

  // add a new feedback copy
  const handleAddFeedback = fb => {
    setFeedbacks(prev => [fb, ...prev])
  }

  return (
    <BrowserRouter>
      {/* navigation bar at the top of the page*/}
      <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
        {/* navlink - a link to navigate between Home and Comments */}
        <NavLink to="/" end style={{ marginRight: 15 }}>Home</NavLink>
        <NavLink to="/comments">Comments</NavLink>
      </nav>

      <Routes>
        {/* shows the form + the list  */}
        <Route
          path="/"
          element={
            <Home
              feedbacks={feedbacks}
              onsubmit={handleAddFeedback}
            />
          }
        />
        {/* shows the list of feedbacks */}
        <Route
          path="/comments"
          element={<Comments feedbacks={feedbacks} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

