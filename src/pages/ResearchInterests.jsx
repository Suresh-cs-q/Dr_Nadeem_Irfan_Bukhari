import React, { useEffect } from 'react';
import './ResearchInterests.css';

const ResearchInterests = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = 'Research Interests | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="research-page">
      <section className="research-hero">
        <div className="container">
          <div className="research-hero-content">
            <h1>Research Interests</h1>
            <div className="page-divider"></div>
            <p className="hero-description">
              Advancing pharmaceutical sciences through innovative drug delivery systems, 
              formulation design, and evidence-based methodologies
            </p>
          </div>
        </div>
      </section>

      <section className="research-overview">
        <div className="container">
          <div className="overview-content">
            <div className="section-header">
              <h2>Research Focus</h2>
              <div className="section-divider"></div>
            </div>
            <p>
              My research focuses on pharmaceutical sciences with particular emphasis on drug delivery systems, 
              formulation design, pharmacokinetics, and pharmacoeconomics. Through rigorous scientific inquiry 
              and interdisciplinary approaches, I strive to develop innovative solutions to enhance therapeutic 
              outcomes and drug effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="research-areas-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Research Areas</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="research-grid">
            <div className="research-card">
              <h3>Particulate Delivery Systems</h3>
              <div className="research-card-content">
                <p>Design and optimization of biodegradable polymeric micro/nanoparticles for targeted drug delivery with focus on:</p>
                <ul>
                  <li>PLGA and starch-based carrier systems</li>
                  <li>Oral delivery of gastrolabile drugs (e.g., cefotaxime)</li>
                  <li>Controlled release formulations</li>
                </ul>
              </div>
            </div>
            
            <div className="research-card">
              <h3>Formulation Design & Optimization</h3>
              <div className="research-card-content">
                <p>Utilizing statistical and artificial neural networking approaches for pharmaceutical development:</p>
                <ul>
                  <li>Computer-aided formulation development using Design Expert®</li>
                  <li>Neural networks for formulation optimization via InForm® and NeuralPower®</li>
                  <li>Statistical modeling for drug release kinetics and stability</li>
                </ul>
              </div>
            </div>
            
            <div className="research-card">
              <h3>Pharmacokinetics</h3>
              <div className="research-card-content">
                <p>Comprehensive analysis of drug absorption, distribution, metabolism, and excretion:</p>
                <ul>
                  <li>Bioequivalence/bioavailability studies of various drugs</li>
                  <li>Tissue distribution studies (e.g., imatinib with ketoconazole)</li>
                  <li>Advanced modeling using WinNonlin®, Kinetica®, and PKAnalyst®</li>
                </ul>
              </div>
            </div>
            
            <div className="research-card">
              <h3>Bioavailability Enhancement</h3>
              <div className="research-card-content">
                <p>Improving oral bioavailability of poorly soluble drugs through innovative techniques:</p>
                <ul>
                  <li>Solid dispersions (e.g., aceclofenac-PVP)</li>
                  <li>Surfactant-based approaches using CTAB</li>
                  <li>Nanoemulsions for enhanced drug solubility</li>
                </ul>
              </div>
            </div>
            
            <div className="research-card">
              <h3>Quality by Design (QbD)</h3>
              <div className="research-card-content">
                <p>Implementing systematic approaches to pharmaceutical development:</p>
                <ul>
                  <li>QbD application in formulation of fixed-dose combinations</li>
                  <li>Process Analytical Techniques (PAT) for nanoparticle fabrication</li>
                  <li>Risk-based quality management systems</li>
                </ul>
              </div>
            </div>
            
            <div className="research-card">
              <h3>Pharmacoeconomics</h3>
              <div className="research-card-content">
                <p>Economic analysis of pharmaceutical products and healthcare interventions:</p>
                <ul>
                  <li>WHO/HAI-sponsored projects on medicine pricing in Malaysia/Pakistan</li>
                  <li>Impact of privatization on drug affordability</li>
                  <li>Cost-effectiveness analysis of treatment regimens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="research-capabilities">
        <div className="container">
          <div className="capabilities-wrapper">
            <div className="capability-column">
              <h3>Software Expertise</h3>
              <ul className="capability-list">
                <li>Pharmacokinetics: WinNonlin®, Kinetica®, PK-Fit®, PKAnalyst®</li>
                <li>DoE/ANN: Design Expert®, InForm®, NeuralPower®</li>
                <li>Statistical Analysis: SPSS®, MINITAB®</li>
              </ul>
            </div>
            
            <div className="capability-column">
              <h3>Interdisciplinary Research</h3>
              <ul className="capability-list">
                <li>Drug-herb interactions and hepatoprotective studies</li>
                <li>Adsorbent development for toxicology applications</li>
                <li>Complementary medicine in chronic disease management</li>
                <li>Radiopharmaceutical quality control and dispensing</li>
              </ul>
            </div>
            
            <div className="capability-column">
              <h3>Key Grants & Collaborations</h3>
              <ul className="capability-list">
                <li>MOSTI Malaysia: PLGA nanoparticles research</li>
                <li>IMU Malaysia: Tumor-targeted siRNA delivery</li>
                <li>Punjab University: Bioequivalence studies</li>
                <li>Industry partnerships with pharmaceutical companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="research-achievements">
        <div className="container">
          <div className="section-header">
            <h2>Academic Impact</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="achievements-content">
            <div className="achievements-grid">
              <div className="achievement-item">
                <span className="achievement-number">21+</span>
                <span className="achievement-label">Years in Academia</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">6+</span>
                <span className="achievement-label">PhD & MPhil Supervisions</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">2</span>
                <span className="achievement-label">Innovation Awards</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">4+</span>
                <span className="achievement-label">Research Grants</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchInterests; 