import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css'
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
function App() {

  return (
    <Router>
      <Nav/>

      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/projects"} element={<Projects/>} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/resume"} element={<Resume />} />
      </Routes>
      {/* Footer here */}
    </Router>
  )
}

export default App
