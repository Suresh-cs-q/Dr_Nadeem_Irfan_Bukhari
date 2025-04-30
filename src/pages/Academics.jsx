import React, { useEffect } from 'react';
import './Academics.css';

const Academics = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = 'Academics | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="academics-page">
      <section className="academics-hero">
        <div className="container">
          <div className="academics-hero-content">
            <h1>Academic Background</h1>
            <div className="page-divider"></div>
            <p className="hero-description">
              Education, teaching experience, and scholarly contributions in pharmaceutical sciences
            </p>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <div className="section-header">
            <h2>Educational Qualifications</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="education-timeline">
            <div className="timeline-entry">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="degree">Doctor of Philosophy (PhD) in Pharmaceuticals</span>
                  <span className="year">2009</span>
                </div>
                <div className="timeline-details">
                  <div className="institution">Universiti Sains Malaysia</div>
                  <p className="thesis">
                    <span className="label">Thesis:</span> "Exploring the potential of optimised starch particulates as a platform for oral delivery of gastrolabile drug cefotaxime"
                  </p>
                  <p className="research-areas">
                    <span className="label">Research Areas:</span> Nanotechnology, biodegradable biopolymers, pharmacokinetics, computer-aided optimization
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="degree">Master of Philosophy (M.Phil) in Pharmaceuticals</span>
                  <span className="year">1988–1990</span>
                </div>
                <div className="timeline-details">
                  <div className="institution">College of Pharmacy, University of the Punjab, Lahore, Pakistan</div>
                  <p className="thesis">
                    <span className="label">Thesis:</span> "Effect of different tranquillizers on the bioavailability of cimetidine"
                  </p>
                  <p className="grade">
                    <span className="label">Grade:</span> 1st Class
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-entry">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="degree">Bachelor of Pharmacy (B.Pharm)</span>
                  <span className="year">1983–1987</span>
                </div>
                <div className="timeline-details">
                  <div className="institution">Gomal University, Dera Ismail Khan, Pakistan</div>
                  <p className="grade">
                    <span className="label">Grade:</span> 1st Class
                  </p>
                  <p className="honors">
                    <span className="label">Honors:</span> President's Talent Scholarship (Ministry of Health, Pakistan); First Position among successful candidates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teaching-section">
        <div className="container">
          <div className="section-header">
            <h2>Teaching Experience</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="teaching-wrapper">
            <div className="teaching-philosophy">
              <h3>Teaching Philosophy</h3>
              <p>
                My teaching approach emphasizes student-centered learning with practical skills development. 
                I integrate current research findings into teaching materials and create an engaging classroom 
                environment that encourages critical thinking and problem-solving abilities. My goal is to 
                prepare students for both academic research and industry applications in pharmaceutical sciences.
              </p>
            </div>
            
            <div className="courses-grid">
              <div className="course-card">
                <h3>Pharmaceutical Technology</h3>
                <div className="course-level">Undergraduate & Graduate</div>
                <p>
                  Covering principles of pharmaceutical formulation, manufacturing processes, and quality control 
                  with emphasis on modern technological approaches and industrial applications.
                </p>
              </div>
              
              <div className="course-card">
                <h3>Pharmacokinetics</h3>
                <div className="course-level">Undergraduate & Graduate</div>
                <p>
                  Study of drug absorption, distribution, metabolism, and excretion processes, including mathematical 
                  modeling of drug behavior in the body and applications in drug development.
                </p>
              </div>
              
              <div className="course-card">
                <h3>Radiopharmacy</h3>
                <div className="course-level">Graduate</div>
                <p>
                  Principles of radiopharmaceutical preparation, quality control, and clinical applications, 
                  with focus on safety procedures and regulatory compliance in handling radioactive materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mentorship-section">
        <div className="container">
          <div className="section-header">
            <h2>Student Mentorship</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="mentorship-intro">
            <p>
              As an HEC-approved research supervisor for M.Phil/PhD candidates, I have guided numerous students 
              through their research journeys, helping them develop critical research skills and contributing to 
              the advancement of pharmaceutical knowledge.
            </p>
          </div>
          
          <div className="supervision-grid">
            <div className="supervision-card">
              <h3>PhD Supervision</h3>
              <ul className="supervision-list">
                <li>
                  <div className="student-name">Current Student</div>
                  <div className="research-topic">Nanoparticle-based drug delivery systems</div>
                  <div className="affiliation">DeMontfort University</div>
                </li>
              </ul>
            </div>
            
            <div className="supervision-card">
              <h3>M.Phil Supervision</h3>
              <ul className="supervision-list">
                <li>
                  <div className="student-name">Shahid Mukhtar (2011)</div>
                  <div className="research-topic">Fixed-dose amlodipine/simvastatin tablets</div>
                </li>
                <li>
                  <div className="student-name">Munazza Tanveer (2011)</div>
                  <div className="research-topic">Economic impact of interferon therapy</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="academic-service-section">
        <div className="container">
          <div className="section-header">
            <h2>Academic Service</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="service-grid">
            <div className="service-card">
              <h3>Departmental Responsibilities</h3>
              <ul className="service-list">
                <li>Head of Pharmaceuticals Section (since June 2012)</li>
                <li>In-charge, Bioequivalence Centre and Postgraduate Examinations</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3>Editorial Work</h3>
              <ul className="service-list">
                <li>Editor, Pakistan Journal of Pharmacy (revived after 10 years; 4 issues published)</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3>Administrative Roles</h3>
              <ul className="service-list">
                <li>Module/Semester Coordinator: IMU Malaysia (2004–2008)</li>
                <li>In-charge: Computer Labs, Industrial Labs, Hostel Arrangements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics; 