import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { Users } from './components/Users'
import { Teams } from './components/Teams'
import { Activities } from './components/Activities'
import { Leaderboard } from './components/Leaderboard'
import { Workouts } from './components/Workouts'

function Home() {
  return (
    <div className="text-center py-5">
      <h1>🐙 Welcome to OctoFit Tracker</h1>
      <p className="lead">Your competitive fitness tracking platform</p>
      <p className="text-muted">
        Track activities, join teams, compete on leaderboards, and get personalized workout suggestions.
      </p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="teams" element={<Teams />} />
          <Route path="activities" element={<Activities />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="workouts" element={<Workouts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
