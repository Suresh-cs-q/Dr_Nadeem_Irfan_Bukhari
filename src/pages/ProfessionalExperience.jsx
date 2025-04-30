import React, { useEffect } from 'react';
import './ProfessionalExperience.css';

const ProfessionalExperience = () => {
  // Set page title on component mount
  useEffect(() => {
    document.title = 'Professional Experience | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <div className="container">
          <div className="experience-hero-content">
            <h1>Professional Experience</h1>
            <div className="page-divider"></div>
            <p className="hero-description">
              Academic, research, and leadership positions spanning over two decades in pharmaceutical sciences
            </p>
          </div>
        </div>
      </section>

      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="section-header">
              <h2>Career Overview</h2>
              <div className="section-divider"></div>
            </div>
            <p>
              With over 21 years of experience in pharmaceutical sciences and academia, I have 
              developed expertise in drug delivery systems, formulation design, and pharmacokinetics. 
              Throughout my career, I have been committed to advancing pharmaceutical education, 
              improving drug delivery technologies, and training the next generation of pharmaceutical 
              professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="career-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Current Positions</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">March 2024 - Present</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Dean of Academic Affairs</h3>
                <div className="timeline-institution">Qarshi University (QU), Lahore</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">April 2023 - Present</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Professor/Dean</h3>
                <div className="timeline-institution">Qarshi University (QU), Lahore</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">December 2010 - Present</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Professor of Pharmaceuticals</h3>
                <div className="timeline-institution">University College of Pharmacy, University of the Punjab, Lahore</div>
                <ul className="responsibility-list">
                  <li>Head of Pharmaceuticals Section (since June 2012)</li>
                  <li>Editor, Pakistan Journal of Pharmacy (revived after 10 years; 4 issues published)</li>
                  <li>In-charge, Bioequivalence Centre and Postgraduate Examinations</li>
                  <li>Teaching: Pharmaceutical Technology, Pharmacokinetics, Radiopharmacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Previous Academic Appointments</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2010 - 2012</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Associate Professor of Pharmaceuticals</h3>
                <div className="timeline-institution">University of the Punjab, Lahore</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2008 - 2010</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Assistant Professor/Lecturer</h3>
                <div className="timeline-institution">University of the Punjab; International Medical University (IMU), Malaysia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Industry & Hospital Experience</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1994 - 1997</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Hospital Pharmacist/Radiopharmacist</h3>
                <div className="timeline-institution">Shaukat Khanum Memorial Cancer Hospital, Lahore</div>
                <div className="achievement">Established radiopharmacy protocols and quality control</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">1990 - 1994</div>
              <div className="timeline-connector"></div>
              <div className="timeline-content">
                <h3>Medical Representative</h3>
                <div className="timeline-institution">Squibb Pakistan Pvt. Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-roles-section">
        <div className="container">
          <div className="section-header">
            <h2>Additional Roles</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="roles-grid">
            <div className="role-card">
              <h3>Visiting Professor</h3>
              <div className="role-date">2012 - Present</div>
              <div className="role-institution">DeMontfort University, UK</div>
            </div>
            
            <div className="role-card">
              <h3>Consultant</h3>
              <div className="role-date">2010 - Present</div>
              <div className="role-institution">Lahore Pharmacy College</div>
            </div>
            
            <div className="role-card">
              <h3>Administrative Leadership</h3>
              <ul className="role-list">
                <li>Dean of Academic Affairs, Qarshi University (2024-Present)</li>
                <li>Module/Semester Coordinator, IMU Malaysia (2004-2008)</li>
              </ul>
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
              <h3>Research Expertise</h3>
              <ul className="expertise-list">
                <li>Particulate drug delivery system design</li>
                <li>Formulation optimization</li>
                <li>Pharmaceutical quality control</li>
                <li>Bioequivalence studies</li>
              </ul>
            </div>
            
            <div className="expertise-card">
              <h3>Technical Proficiency</h3>
              <ul className="expertise-list">
                <li>Pharmacokinetics software (WinNonlin®, Kinetica®)</li>
                <li>Design of Experiments (Design Expert®)</li>
                <li>Artificial Neural Networks (NeuralPower®)</li>
                <li>Statistical analysis (SPSS, MINITAB)</li>
              </ul>
            </div>
            
            <div className="expertise-card">
              <h3>Leadership Skills</h3>
              <ul className="expertise-list">
                <li>Academic administration</li>
                <li>Research supervision</li>
                <li>Journal editorship</li>
                <li>Curriculum development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfessionalExperience; 