import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, MessageCircle, Shield, Clock, Award, CheckCircle2, Menu, X, ChevronRight, Droplets, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Assets
import Logo from "./assets/acclogo.svg";
import LngImage from "./assets/lng.png";
import HydrogenImage from "./assets/hydrogen.png";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ================= HEADER ================= */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo-area">
          <img src={Logo} alt="Agrawal Cargo Carrier Logo" className="logo" />
          <div className="logo-text">
            <h1>Agrawal Cargo Carrier</h1>
            <span>Safe & Sustainable Logistics</span>
          </div>
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="tel:+919979794000" className="nav-cta">Call Now</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="badge">Pioneering Logistics</div>
            <h2>Fueling India's Future with <span className="text-gradient">Sustainable Energy</span></h2>
            <p>Specializing in safe transportation of LNG, Green Hydrogen, LPG, Propane, and Ammonia across the nation.</p>

            <div className="actions">
              <a href="tel:+919979794000" className="btn btn-primary">
                Get a Quote <ChevronRight size={20} />
              </a>
              <a href="https://wa.me/919979794000" className="btn btn-secondary">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>

            <div className="stats">
              <div className="stat-item">
                <strong>25+</strong>
                <span>Years Exp.</span>
              </div>
              <div className="stat-item">
                <strong>150+</strong>
                <span>Fleet Size</span>
              </div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>Safety Record</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt="Logistics Truck"
              />
              <div className="image-overlay-card">
                <Shield className="icon-gold" />
                <div>
                  <h4>PESO Approved</h4>
                  <p>Certified Hazardous Transport</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="features-strip">
        <div className="container flex-row">
          <div className="feature-item"><CheckCircle2 /> Real-time GPS Tracking</div>
          <div className="feature-item"><CheckCircle2 /> 24/7 Support</div>
          <div className="feature-item"><CheckCircle2 /> Professional Drivers</div>
          <div className="feature-item"><CheckCircle2 /> Safety First Protocol</div>
        </div>
      </section>
    </motion.div>
  );
}

/* ================= SERVICES ================= */
function Services() {
  const services = [
    {
      title: "LNG Logistics",
      desc: "Comprehensive LNG transportation solutions using advanced cryogenic tankers. We ensure safe and efficient delivery of Liquefied Natural Gas to industrial and commercial hubs.",
      fleet: "Specialized Cryogenic Fleet",
      image: LngImage,
      icon: <Droplets className="service-icon" />
    },
    {
      title: "Green Hydrogen Transport",
      desc: "Pioneering the future of clean energy with specialized high-pressure hydrogen transport solutions, supporting India's transition to a net-zero economy.",
      fleet: "Next-Gen H2 Tankers",
      image: HydrogenImage,
      icon: <Zap className="service-icon" />
    },
    {
      title: "LPG & Propane",
      desc: "Robust fleet of PESO-approved tank trucks for LPG, Propane, and Butadiene. Each vehicle undergoes rigorous pressure testing for zero-risk delivery.",
      fleet: "100+ Tank Trucks",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      icon: <Truck className="service-icon" />
    },
    {
      title: "Liquid Ammonia",
      desc: "Engineered for hazardous material movement with advanced safety valves, specialized monitoring, and highly trained emergency response teams.",
      fleet: "50+ Specialized Tankers",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      icon: <Shield className="service-icon" />
    }
  ];

  return (
    <motion.section
      className="section services-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Expertise</span>
          <h2>Comprehensive Infrastructure</h2>
          <p>We provide world-class logistics for hazardous and energy-critical materials.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-new"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-wrapper">{service.icon}</div>
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-meta">
                  <span className="fleet-tag"><strong>Fleet:</strong> {service.fleet}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <motion.section
      className="section about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-text">
            <h2>Decades of Trust in <span className="text-gradient">Hazardous Logistics</span></h2>
            <p>Agrawal Cargo Carrier is a professionally managed logistics enterprise specializing in the safe transportation of critical energy resources and industrial chemicals across India.</p>
          </div>
        </div>

        <div className="trust-grid">
          {[
            { icon: <Shield />, title: "Regulatory Integrity", text: "Strict adherence to PESO, RTO & Hazardous Goods regulations." },
            { icon: <Award />, title: "Proven Experience", text: "25+ years of excellence serving PSUs and industry leaders." },
            { icon: <Clock />, title: "Timely Deliveries", text: "Optimized routing ensures minimal turnaround time." },
            { icon: <CheckCircle2 />, title: "Safety First", text: "Zero-compromise approach to safety & compliance protocols." }
          ].map((item, i) => (
            <div key={i} className="trust-card-new">
              <div className="trust-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="leadership-section">
          <h3>Our Leadership</h3>
          <div className="directors-grid">
            <div className="director-card-new">
              <h4>Sanjay M. Agrawal</h4>
              <span className="role">Founder & Director | 25+ Years Experience</span>
              <p>Establishing new safety benchmarks in hazardous logistics since the company's inception.</p>
              <div className="vision-quote">"To remain India’s most trusted hazardous logistics partner."</div>
            </div>
            <div className="director-card-new">
              <h4>Reyansh Agrawal</h4>
              <span className="role">Director | Next-Gen Leadership</span>
              <p>Driving digital transformation and operational efficiency with technology-first initiatives.</p>
              <div className="vision-quote">"Technology-driven, customer-first nationwide logistics."</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <motion.section
      className="section contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to discuss your logistics needs? Our team is here to help.</p>

            <div className="contact-methods">
              <a href="tel:+919825076200" className="contact-method">
                <Phone />
                <div>
                  <span>Phone Numbers</span>
                  <strong>+91 98250 76200</strong>
                  <strong className="sub-detail">+91 99797 94000</strong>
                </div>
              </a>
              <a href="mailto:acc@agrawalcargocarrier.com" className="contact-method">
                <Mail />
                <div>
                  <span>Email Addresses</span>
                  <strong>acc@agrawalcargocarrier.com</strong>
                  <strong className="sub-detail">sma0831@gmail.com</strong>
                </div>
              </a>
              <div className="contact-method">
                <MapPin />
                <div>
                  <span>Visit Office</span>
                  <strong>D-70/71, Main Market, Gandhidham, Kutch – 370201, Gujarat</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Gandhidham%20Main%20Market&output=embed"
              loading="lazy"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <Link to="/" className="footer-logo">
              <img src={Logo} alt="Logo" />
              <span>Agrawal Cargo Carrier</span>
            </Link>
            <p className="footer-desc">
              Pioneering safe and sustainable hazardous material logistics across India for over 25 years. 
              Certified, trusted, and reliable.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/919979794000" className="social-icon"><MessageCircle size={20} /></a>
              <a href="tel:+919979794000" className="social-icon"><Phone size={20} /></a>
            </div>
          </div>

          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} />
                <div className="footer-links-stack">
                  <a href="tel:+919825076200">+91 98250 76200</a>
                  <a href="tel:+919979794000">+91 99797 94000</a>
                </div>
              </li>
              <li>
                <Mail size={16} />
                <div className="footer-links-stack">
                  <a href="mailto:acc@agrawalcargocarrier.com">acc@agrawalcargocarrier.com</a>
                  <a href="mailto:sma0831@gmail.com">sma0831@gmail.com</a>
                </div>
              </li>
              <li>
                <MapPin size={16} />
                <span>Gandhidham, Kutch, Gujarat</span>
              </li>
            </ul>
          </div>

          <div className="footer-badge-section">
            <div className="safety-badge">
              <Shield size={32} />
              <div>
                <strong>Safety First</strong>
                <span>PESO Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Agrawal Cargo Carrier. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= FLOATING BUTTONS ================= */
function FloatingButtons() {
  return (
    <div className="floating-new">
      <motion.a
        href="https://wa.me/919979794000"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="whatsapp-float"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        href="tel:+919979794000"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="phone-float"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}

