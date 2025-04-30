import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers, FaEdit, FaExternalLinkAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    // Simulate form submission with a delay
    try {
      // In a real application, you would send the form data to a server
      console.log('Form data submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      reset();
      setFormSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <div className="section-divider"></div>
          <p>Get in touch for research collaborations, speaking engagements, or academic inquiries</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <p className="info-description">
                  Feel free to reach out through any of the following channels for academic or professional inquiries.
                </p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <a href="mailto:nadeem_irfan@hotmail.com">nadeem_irfan@hotmail.com</a>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FaPhone />
                    </div>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <a href="tel:+923004259738">+92 300 4259738</a>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-content">
                      <h4>Office Locations</h4>
                      <div className="location-details">
                        <div className="location">
                          <strong>Primary Office:</strong>
                          <p>Dean of Academic Affairs & Professor</p>
                          <p>Qarshi University</p>
                          <p>Lahore, Pakistan</p>
                        </div>
                        <div className="location">
                          <strong>Secondary Office:</strong>
                          <p>Professor of Pharmaceuticals</p>
                          <p>University College of Pharmacy</p>
                          <p>University of the Punjab, Allama Iqbal Campus</p>
                          <p>Lahore-54000, Pakistan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Professional Profiles</h3>
                <div className="profile-links">
                  <a href="https://scholar.google.com/citations?user=zJm_r6kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="profile-link">
                    Google Scholar <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <a href="https://www.researchgate.net/profile/Nadeem-Bukhari-2" target="_blank" rel="noopener noreferrer" className="profile-link">
                    ResearchGate <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/nadeem-irfan-bukhari-b7b05015/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className="profile-link">
                    LinkedIn <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Academic Affiliations</h3>
                <div className="affiliations">
                  <div className="affiliation-group">
                    <h4>International Memberships</h4>
                    <ul className="affiliation-list">
                      <li>Control Release Society (CRS, USA)</li>
                      <li>International Pharmaceutical Federation (FIP, Netherlands)</li>
                    </ul>
                  </div>
                  
                  <div className="affiliation-group">
                    <h4>Editorial Roles</h4>
                    <ul className="affiliation-list">
                      <li>Senior Editor: Pakistan Journal of Pharmacy (2008–Present)</li>
                      <li>Reviewer: International Journal of Pharmaceutics (UK), PLoS Medicine</li>
                    </ul>
                  </div>
                  
                  <div className="affiliation-group">
                    <h4>Local Roles</h4>
                    <ul className="affiliation-list">
                      <li>Additional Member, Drug Courts Lahore (Govt. of Pakistan)</li>
                      <li>Technical Expert, Punjab Public Service Commission</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <div className="form-card">
                <h3>Send a Message</h3>
                <p className="form-description">
                  Please complete the form below for any inquiries about research collaborations, 
                  consultations, or speaking opportunities.
                </p>
                
                {formSubmitted && (
                  <div className="form-success-message">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="name"
                        className={errors.name ? 'input-error' : ''}
                        placeholder="Your full name"
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters'
                          }
                        })}
                      />
                      {errors.name && <p className="error-message">{errors.name.message}</p>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        className={errors.email ? 'input-error' : ''}
                        placeholder="Your email address"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject <span className="required">*</span></label>
                    <input
                      type="text"
                      id="subject"
                      className={errors.subject ? 'input-error' : ''}
                      placeholder="Subject of your message"
                      {...register('subject', {
                        required: 'Subject is required',
                        minLength: {
                          value: 5,
                          message: 'Subject must be at least 5 characters'
                        }
                      })}
                    />
                    {errors.subject && <p className="error-message">{errors.subject.message}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      className={errors.message ? 'input-error' : ''}
                      placeholder="Your message"
                      rows="6"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 20,
                          message: 'Message must be at least 20 characters'
                        }
                      })}
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn primary-btn submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="office-hours-section">
        <div className="container">
          <div className="section-header">
            <h2>Office Hours & Availability</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="office-hours-container">
            <div className="hours-card">
              <h3>Qarshi University</h3>
              <ul className="hours-list">
                <li><strong>Monday & Wednesday:</strong> 10:00 AM - 2:00 PM</li>
                <li><strong>Thursday:</strong> 1:00 PM - 4:00 PM</li>
              </ul>
              <p className="appointment-note">Appointments recommended for meetings outside regular hours</p>
            </div>
            
            <div className="hours-card">
              <h3>University of the Punjab</h3>
              <ul className="hours-list">
                <li><strong>Tuesday:</strong> 9:00 AM - 12:00 PM</li>
                <li><strong>Friday:</strong> 11:00 AM - 3:00 PM</li>
              </ul>
              <p className="appointment-note">Please email in advance to confirm availability</p>
            </div>
            
            <div className="hours-card">
              <h3>Virtual Meetings</h3>
              <p>Available for scheduled Zoom or Microsoft Teams meetings</p>
              <p className="appointment-note">Please email to arrange a convenient time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="faq-container">
            <div className="faq-card">
              <h3>How can I collaborate on research projects?</h3>
              <p>
                I welcome research collaborations in pharmaceutical sciences, particularly in drug delivery systems, 
                formulation optimization, and pharmacoeconomics. Please email me with a brief proposal outlining 
                your research interests, potential collaboration areas, and any specific project ideas.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>Are you accepting new graduate students?</h3>
              <p>
                I typically accept 2-3 new graduate students each academic year based on their research interests 
                and qualifications. Prospective students should email me their CV, research interests, and academic 
                transcripts well ahead of application deadlines.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>Do you provide consultation services?</h3>
              <p>
                Yes, I offer consultations to pharmaceutical companies and research organizations in areas including 
                formulation development, quality control methodologies, and regulatory compliance. Please use the 
                contact form to inquire about availability and rates.
              </p>
            </div>
            
            <div className="faq-card">
              <h3>Are you available for speaking engagements?</h3>
              <p>
                I regularly participate in conferences, workshops, and seminars as a speaker on topics related to 
                pharmaceutical sciences, education, and research methodologies. Please contact me at least 2-3 months 
                in advance with details of your event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 