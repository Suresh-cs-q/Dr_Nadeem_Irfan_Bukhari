import React, { useState, useEffect } from 'react';
import './PublicationsProjects.css';

const PublicationsProjects = () => {
  const [activeTab, setActiveTab] = useState('publications');

  useEffect(() => {
    document.title = 'Publications & Projects | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="publications-page">
      <section className="publications-hero">
        <div className="container">
          <div className="publications-hero-content">
            <h1>Publications & Projects</h1>
            <div className="page-divider"></div>
            <p className="hero-description">
              Scholarly work, research papers, books, and academic projects in pharmaceutical sciences
            </p>
          </div>
        </div>
      </section>

      <section className="publications-section">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveTab('publications')}
            >
              Publications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Research Projects & Grants
            </button>
            <button 
              className={`tab-btn ${activeTab === 'books' ? 'active' : ''}`}
              onClick={() => setActiveTab('books')}
            >
              Books & Chapters
            </button>
            <button 
              className={`tab-btn ${activeTab === 'collaborations' ? 'active' : ''}`}
              onClick={() => setActiveTab('collaborations')}
            >
              Industry Collaborations
            </button>
          </div>

          {activeTab === 'publications' && (
            <div className="tab-content publications-tab">
              <div className="publications-list">
                <div className="section-header">
                  <h2>Selected Journal Articles</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="publication-grid">
                  <div className="publication-card">
                    <h3>Evaluation of Phoenix sylvestris seeds for paracetamol adsorption</h3>
                    <div className="pub-meta">Khan et al. <span className="pub-year">2012</span></div>
                    <div className="pub-journal">Latin American Journal of Pharmacy (IF: 0.308)</div>
                  </div>
                  <div className="publication-card">
                    <h3>Drug pricing in Malaysia</h3>
                    <div className="pub-meta">Baber et al. <span className="pub-year">2007</span></div>
                    <div className="pub-journal">PLoS Medicine (IF: 15.617)</div>
                  </div>
                  <div className="publication-card">
                    <h3>Bioequivalence of enteric-coated aspirin</h3>
                    <div className="pub-meta">Bukhari et al. <span className="pub-year">2005</span></div>
                    <div className="pub-journal">Therapie (IF: 0.307)</div>
                  </div>
                  <div className="publication-card">
                    <h3>Imatinib tissue distribution with metronidazole</h3>
                    <div className="pub-meta">Tan et al. <span className="pub-year">2009</span></div>
                    <div className="pub-journal">Journal of Pharmacy and Pharmacology (IF: 1.980)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="tab-content projects-tab">
              <div className="section-header">
                <h2>Research Projects & Grants</h2>
                <div className="section-divider"></div>
              </div>
              <div className="project-grid">
                <div className="project-card">
                  <h3>PLGA nanoparticles for cardiovascular drugs</h3>
                  <div className="project-meta">MOSTI Malaysia <span className="project-year">2008</span></div>
                  <div className="project-role">Co-Investigator</div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-card">
                  <h3>Tumor-targeted siRNA delivery</h3>
                  <div className="project-meta">IMU Malaysia <span className="project-year">2008</span></div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-card">
                  <h3>Griseofulvin bioavailability enhancement</h3>
                  <div className="project-meta">IMU Malaysia <span className="project-year">2008</span></div>
                  <div className="project-role">Principal Investigator</div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-card">
                  <h3>Medicine pricing surveys</h3>
                  <div className="project-meta">WHO/HAI <span className="project-year">2004-2005</span></div>
                  <div className="project-status completed">Completed</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'books' && (
            <div className="tab-content books-tab">
              <div className="section-header">
                <h2>Books & Book Chapters</h2>
                <div className="section-divider"></div>
              </div>
              <div className="books-grid">
                <div className="book-card">
                  <h3>Biopharmaceutics and Pharmacokinetics – An Activity-Based Learning</h3>
                  <div className="book-meta">2011</div>
                </div>
                <div className="book-card">
                  <h3>The Reality of Medicine Prices in Malaysia</h3>
                  <div className="book-meta">2010, Co-author</div>
                </div>
                <div className="book-card">
                  <h3>Pharmaceutical Management and Marketing</h3>
                  <div className="book-meta">2002, HEC-recommended</div>
                </div>
                <div className="book-card">
                  <h3>Hospital Pharmacy</h3>
                  <div className="book-meta">2000, ISBN: 969-486-025-3</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'collaborations' && (
            <div className="tab-content collaborations-tab">
              <div className="section-header">
                <h2>Industry Collaborations</h2>
                <div className="section-divider"></div>
              </div>
              <div className="collaborations-grid">
                <div className="collaboration-card">
                  <h3>Highnoon Labs</h3>
                  <div className="collaboration-meta">Aspirin bioequivalence study</div>
                </div>
                <div className="collaboration-card">
                  <h3>Galena Pharmaceuticals</h3>
                  <div className="collaboration-meta">Cyclosporin monitoring project</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PublicationsProjects; 