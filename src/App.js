import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Skills from './pages/Skills'
import Projects from "./pages/Projects";
import ProjectDisplay from './pages/ProjectDisplay';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = `Phuc's Portfolio Website`
  }, [])
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/skills" element = {<Skills/>}></Route>
          <Route path = "/projects" element = {<Projects/>} />
          <Route path = "/project/:id" element = {<ProjectDisplay/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
