import NavReact from './components/navReact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About';


function App() {
  return (
    <>
      <Router>
        <NavReact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </>
  )
}

export default App