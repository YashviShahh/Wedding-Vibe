import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Saved } from './pages/Saved'
import { Trends } from './pages/Trends'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="border-t border-rose-100 py-6 text-center text-xs text-rose-400">
        Built with 💛 for wedding season — follow the build on X.
      </footer>
    </div>
  )
}

export default App
