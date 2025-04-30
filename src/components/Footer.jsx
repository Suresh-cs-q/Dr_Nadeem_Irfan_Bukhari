import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Dr. Nadeem Irfan Bukhari</h2>
          <p>Professor of Pharmaceuticals</p>
          <p>University of the Punjab</p>
          <p>Dean of Academic Affairs</p>
          <p>Qarshi University, Lahore</p>
          <div className="social-icons">
            <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Research Gate Profile">RG</a>
            <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Google Scholar Profile">GS</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/research-interests">Research Interests</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/professional-experience">Professional Experience</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>More</h3>
          <ul className="footer-links">
            <li><Link to="/publications-projects">Publications & Projects</Link></li>
            <li><Link to="/conferences-workshops">Conferences & Workshops</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>nadeem_irfan@hotmail.com</p>
          <p>+92-3004259738</p>
          <p>Qarshi University</p> 
          <p>Lahore, Pakistan</p>
          <p>University College of Pharmacy</p>
          <p>University of the Punjab, Lahore</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Nadeem Irfan Bukhari. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 