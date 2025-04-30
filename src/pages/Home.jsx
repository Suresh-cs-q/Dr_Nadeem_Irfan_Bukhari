import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = 'Dr. Nadeem Irfan Bukhari | Professor & Dean';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Dr. Nadeem Irfan Bukhari</h1>
            <div className="title-divider"></div>
            <h2 className="hero-subtitle">Professor of Pharmaceuticals & Dean of Academic Affairs</h2>
            <p className="hero-description">
              Advancing pharmaceutical research and education through innovative drug formulation,
              delivery systems, and quality-focused methodologies
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
              <Link to="/publications-projects" className="btn secondary-btn">View Publications</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="section-header">
              <h2>Academic Leader & Researcher</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-text">
              <p>
                With over 20 years of experience in pharmaceutical sciences, I currently serve as the 
                Dean of Academic Affairs at Qarshi University and Professor at the University of the Punjab. 
                My work focuses on advancing drug delivery systems, formulation design, and quality control methodologies.
              </p>
              <p>
                Through research, mentorship, and academic leadership, I strive to bridge the gap between 
                theoretical knowledge and practical pharmaceutical applications, preparing the next generation 
                of pharmaceutical scientists and practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container">
          <div className="section-header">
            <h2>Areas of Expertise</h2>
            <div className="section-divider"></div>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>Drug Delivery Systems</h3>
              <p>Developing novel approaches to therapeutic agent delivery for enhanced efficacy and patient outcomes</p>
            </div>
            <div className="expertise-card">
              <h3>Formulation Design</h3>
              <p>Creating stable, effective pharmaceutical formulations with optimized bioavailability</p>
            </div>
            <div className="expertise-card">
              <h3>Pharmacokinetics</h3>
              <p>Studying drug absorption, distribution, metabolism, and excretion to improve therapeutic regimens</p>
            </div>
            <div className="expertise-card">
              <h3>Quality Control</h3>
              <p>Implementing rigorous quality assurance methodologies for pharmaceutical products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2>Academic Highlights</h2>
            <div className="section-divider"></div>
          </div>
          <div className="highlights-content">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Research Publications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Conference Presentations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">PhD & MPhil Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Collaboration?</h2>
            <p>Connect with me to discuss research opportunities, academic collaborations, or speaking engagements</p>
            <Link to="/contact" className="btn primary-btn">Contact Me</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 