import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaAward, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import './ConferencesWorkshops.css';

const ConferencesWorkshops = () => {
  const [activeTab, setActiveTab] = useState('keynote');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Conferences & Workshops | Dr. Nadeem Irfan Bukhari';
    window.scrollTo(0, 0);
  }, []);

  const keynoteEvents = [
    {
      title: "Quality by Design (QBD) and Design Space",
      date: "January 2013",
      location: "School of Pharmacy, University College London, UK",
      description: "Delivered an invited lecture on Quality by Design principles and implementation strategies for postgraduate QP Course students.",
      role: "Invited Speaker",
      highlights: ["Discussed ICH Q8 guidelines", "Practical applications in pharmaceutical industry", "Case studies in formulation development"]
    },
    {
      title: "Statistics in Pharmacy & Dosage Form Development",
      date: "July 2012",
      location: "University College London, UK",
      description: "Presented statistical approaches for pharmaceutical formulation optimization as part of the Pharmaceutical Statistics Module.",
      role: "Guest Lecturer",
      highlights: ["Statistical design of experiments", "Multivariate analysis techniques", "Predictive modeling in formulation"]
    },
    {
      title: "Advanced Pharmaceutical Formulation Approaches (DoE/ANN)",
      date: "May 2012",
      location: "PCSIR Lahore, Pakistan",
      description: "Delivered a keynote address on modern approaches to pharmaceutical formulation using Design of Experiments and Artificial Neural Networks.",
      role: "Keynote Speaker",
      highlights: ["Optimization techniques in formulation", "Neural network applications", "Industry 4.0 principles in pharmaceutical manufacturing"]
    },
    {
      title: "Drug Delivery Systems for Targeted Therapies",
      date: "October 2011",
      location: "International Pharmaceutical Conference, Islamabad",
      description: "Presented research on novel drug delivery systems aimed at improving therapeutic efficacy through targeted delivery mechanisms.",
      role: "Plenary Speaker",
      highlights: ["Nanoparticle-based delivery systems", "Site-specific targeting", "Improved bioavailability strategies"]
    }
  ];

  const presentationEvents = [
    {
      year: "2012",
      venue: "APS PharmSci, UK",
      presentations: [
        {
          title: "Amorphization of lactose monohydrate",
          type: "Oral Presentation",
          description: "Investigation of amorphization techniques for enhancing solubility of pharmaceutical excipients."
        },
        {
          title: "Surface proton percolation in milled lactose",
          type: "Oral Presentation",
          description: "Study on the influence of milling on surface properties of lactose and its implications in formulation stability."
        }
      ]
    },
    {
      year: "2012",
      venue: "Malaysian Society of Pharmacology",
      presentations: [
        {
          title: "Doxorubicin-induced liver injury in cancer patients",
          type: "Oral Presentation",
          description: "Clinical study on hepatotoxicity associated with doxorubicin therapy and potential protective strategies."
        },
        {
          title: "Antioxidant activity of Daucus carota root",
          type: "Oral Presentation",
          description: "Research on natural antioxidants from carrot extract and their potential pharmaceutical applications."
        }
      ]
    },
    {
      year: "2008",
      venue: "International Pharmaceutical Federation (FIP) Congress, Basel",
      presentations: [
        {
          title: "Quality control parameters for sustained-release matrix tablets",
          type: "Poster Presentation",
          description: "Development and validation of quality control tests specific to sustained-release dosage forms."
        }
      ]
    },
    {
      year: "2005",
      venue: "WHO/HAI Medicine Pricing Meeting, Malaysia",
      presentations: [
        {
          title: "Policy discussions on drug affordability",
          type: "Panel Discussion",
          description: "Contributed to policy discussions on improving access to essential medicines in developing countries."
        }
      ]
    }
  ];

  const awardEvents = [
    {
      title: "Best Poster Award",
      year: "2007",
      event: "Joint Commonwealth-Malaysian Pharmaceutical Conference",
      work: "Fabrication of starch nanoparticles using Design of Experiments",
      description: "Recognition for innovative research in developing biodegradable nanoparticles for drug delivery using statistical optimization approaches."
    },
    {
      title: "Silver Medal",
      year: "2006",
      event: "Malaysia Technology Expo",
      work: "Nanoparticle coating for herbal product shelf-life",
      description: "Award for developing a novel preservation technique that significantly extended the stability of herbal extracts."
    },
    {
      title: "Young Scientist Award",
      year: "2004",
      event: "Pakistan Pharmaceutical Symposium",
      work: "Novel approach to bioavailability enhancement of poorly soluble drugs",
      description: "Recognition for innovative research on solubility enhancement techniques for BCS Class II drugs."
    }
  ];

  const workshopEvents = [
    {
      title: "Research Methodology & Statistical Techniques",
      date: "December 2004",
      location: "Universiti Sains Malaysia",
      organizer: "School of Pharmaceutical Sciences, USM",
      description: "Intensive workshop on advanced research methods and statistical analysis for pharmaceutical scientists."
    },
    {
      title: "Problem-Based Learning (PBL)",
      date: "May 2003",
      location: "Universiti Sains Malaysia",
      organizer: "Center for Educational Development, USM",
      description: "Training workshop on implementing problem-based learning approaches in pharmaceutical education."
    },
    {
      title: "Good Manufacturing Practices (GMP)",
      date: "May 1998",
      location: "Lahore, Pakistan",
      organizer: "Ministry of Health, Pakistan",
      description: "Comprehensive workshop on GMP implementation and compliance for pharmaceutical manufacturing."
    },
    {
      title: "Radiopharmaceuticals: Production and Quality Control",
      date: "August 2010",
      location: "International Atomic Energy Agency, Vienna",
      organizer: "IAEA Nuclear Science Division",
      description: "Specialized training on production techniques and quality control measures for radiopharmaceuticals."
    }
  ];

  const filteredPresentations = filter === 'all' 
    ? presentationEvents 
    : presentationEvents.filter(event => event.year === filter);

  const years = [...new Set(presentationEvents.map(event => event.year))];

  return (
    <main className="conferences-workshops">
      <section className="page-header">
        <div className="container">
          <h1>Conferences & Workshops</h1>
          <div className="section-divider"></div>
          <p>Academic contributions and professional development through international conferences, workshops, and scholarly events</p>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Academic Engagement</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'keynote' ? 'active' : ''}`}
              onClick={() => setActiveTab('keynote')}
            >
              Keynote/Invited Lectures
            </button>
            <button 
              className={`tab-btn ${activeTab === 'presentations' ? 'active' : ''}`}
              onClick={() => setActiveTab('presentations')}
            >
              Oral/Poster Presentations
            </button>
            <button 
              className={`tab-btn ${activeTab === 'awards' ? 'active' : ''}`}
              onClick={() => setActiveTab('awards')}
            >
              Award-Winning Research
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workshops' ? 'active' : ''}`}
              onClick={() => setActiveTab('workshops')}
            >
              Workshops Attended
            </button>
          </div>

          {activeTab === 'keynote' && (
            <div className="tab-content keynote-tab">
              <div className="event-timeline">
                {keynoteEvents.map((event, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="event-card">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <span className="event-date"><FaCalendarAlt /> {event.date}</span>
                        <span className="event-location"><FaMapMarkerAlt /> {event.location}</span>
                        <span className="event-role"><FaUser /> {event.role}</span>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <div className="event-highlights">
                        <h4>Key Topics:</h4>
                        <ul>
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'presentations' && (
            <div className="tab-content presentations-tab">
              <div className="filter-container">
                <select 
                  className="event-filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="presentation-timeline">
                {filteredPresentations.map((yearGroup, index) => (
                  <div className="presentation-year" key={index}>
                    <div className="year-header">
                      <h2>{yearGroup.year} - {yearGroup.venue}</h2>
                    </div>
                    <div className="year-presentations">
                      {yearGroup.presentations.map((presentation, idx) => (
                        <div className="presentation-card" key={idx}>
                          <div className="presentation-type-badge">{presentation.type}</div>
                          <h3>{presentation.title}</h3>
                          <p>{presentation.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="tab-content awards-tab">
              <div className="awards-grid">
                {awardEvents.map((award, index) => (
                  <div className="award-card" key={index}>
                    <div className="award-header">
                      <FaAward className="award-icon" />
                      <h3>{award.title}</h3>
                    </div>
                    <div className="award-details">
                      <p className="award-event">{award.event}, {award.year}</p>
                      <p className="award-work">"{award.work}"</p>
                      <p className="award-description">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'workshops' && (
            <div className="tab-content workshops-tab">
              <div className="workshop-timeline">
                {workshopEvents.map((workshop, index) => (
                  <div className="workshop-item" key={index}>
                    <div className="workshop-card">
                      <h3>{workshop.title}</h3>
                      <div className="workshop-meta">
                        <span className="workshop-date"><FaCalendarAlt /> {workshop.date}</span>
                        <span className="workshop-location"><FaMapMarkerAlt /> {workshop.location}</span>
                      </div>
                      <p className="workshop-organizer"><FaUniversity /> Organized by: {workshop.organizer}</p>
                      <p className="workshop-description">{workshop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Inviting Me to Speak?</h2>
            <p>I'm available for keynote lectures, workshops, and expert panels on pharmaceutical sciences and related fields</p>
            <a href="/contact" className="btn primary-btn">Contact Me</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConferencesWorkshops; 