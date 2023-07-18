import './App.css';
import { React } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Welcome } from './pages/Welcome';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';


function App() {
  return (
    <div className="App">
        <Navbar />
          <Welcome />
          <AboutMe />
          <Projects />
          <Contact />
        <Footer />
    </div>
  );
}

export default App;
