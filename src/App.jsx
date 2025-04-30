import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ResearchInterests from './pages/ResearchInterests';
import Academics from './pages/Academics';
import ProfessionalExperience from './pages/ProfessionalExperience';
import PublicationsProjects from './pages/PublicationsProjects';
import ConferencesWorkshops from './pages/ConferencesWorkshops';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research-interests" element={<ResearchInterests />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/professional-experience" element={<ProfessionalExperience />} />
          <Route path="/publications-projects" element={<PublicationsProjects />} />
          <Route path="/conferences-workshops" element={<ConferencesWorkshops />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
