import { Routes, Route, Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ================= HEADER ================= */

import Logo from "./assets/acclogo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-area">
        <img
          src={Logo}
          alt="Agrawal Cargo Carrier Logo"
          className="logo"
        />
        <h1>Agrawal Cargo Carrier</h1>
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>

      {/* Hamburger Menu */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}


/* ================= HOME ================= */
function Home() {
  return (
    <section className="section hero">
      <div className="hero-text">
        <h2>Pioneering Safe Logistics Across India</h2>
        <p>LPG • Propane • Ammonia • Hazardous Chemicals</p>

        <div className="actions">
          <a href="tel:+919979794000">Call Now</a>
          <a href="https://wa.me/919979794000">WhatsApp</a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
        alt="Logistics Truck"
      />

      {/* <div className="truck-animation">
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        <div className="truck-space"><Truck size={50}/></div>
        
      </div> */}
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="section services">
      <h2>Our Services & Infrastructure</h2>

      <div className="service-cards">
        <div className="service-card">
          <h3>LPG, Propane & Butadiene Transport</h3>
          <p>
            We operate a fleet of PESO-approved tank trucks dedicated to LPG,
            Propane, and Butadiene transportation. Each vehicle undergoes
            pressure testing and strict compliance checks to ensure zero-risk
            delivery.
          </p>
          <p><strong>Fleet Size:</strong> 100+ Tank Trucks</p>
        </div>

        <div className="service-card">
          <h3>Liquid Ammonia & Chemical Logistics</h3>
          <p>
            Our ammonia and chemical tankers are engineered for hazardous
            material movement with advanced safety valves, trained drivers, and
            real-time monitoring systems.
          </p>
          <p><strong>Fleet Size:</strong> 50+ Specialized Tankers</p>
        </div>

        <div className="service-card">
          <h3>Tracking, Safety & Compliance</h3>
          <p>
            All vehicles are GPS and VTS enabled with 24×7 monitoring. Our teams
            are trained in hazardous material handling, defensive driving, and
            emergency response protocols.
          </p>
          <p><strong>Tracking Coverage:</strong> 100%</p>
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section className="section about">
  <h2>About Agrawal Cargo Carrier</h2>

  <p className="about-intro">
    <strong>Agrawal Cargo Carrier</strong> is a professionally managed logistics
    enterprise specializing in the safe transportation of
    <strong> LPG, Propane, Ammonia, and Hazardous Chemicals</strong>.
    We serve leading <strong>PSU oil marketing companies</strong>,
    refineries, ports, and industrial zones across India.
  </p>

  {/* TRUST CARDS */}
  <h3 className="sub-heading">Why Clients Trust Us</h3>

  <div className="trust-cards">
    <div className="trust-card">
      <h4>Regulatory Integrity</h4>
      <p>
        Strict adherence to <strong>PESO, RTO & Hazardous Goods regulations</strong>.
      </p>
    </div>

    <div className="trust-card">
      <h4>Proven Experience</h4>
      <p>
        <strong>25+ years</strong> of serving PSUs and industry leaders.
      </p>
    </div>

    <div className="trust-card">
      <h4>Timely Deliveries</h4>
      <p>
        Optimized routing ensures <strong>minimal turnaround time</strong>.
      </p>
    </div>

    <div className="trust-card">
      <h4>Safety First</h4>
      <p>
        <strong>Zero-compromise</strong> approach to safety & compliance.
      </p>
    </div>
  </div>

  {/* DIRECTORS */}
  <h3 className="sub-heading">Leadership</h3>

  <div className="directors">
    <div className="director-card">
      <h4>Sanjay M. Agrawal</h4>
      <span>Founder & Director | 25+ Years Experience</span>
      <p>
        Founder of Agrawal Cargo Carrier, Sanjay M. Agrawal established the company
        with a mission to set <strong>new safety benchmarks</strong> in hazardous logistics.
      </p>
      <p className="vision">
        <strong>Vision:</strong> To remain India’s most trusted hazardous logistics partner.
      </p>
    </div>

    <div className="director-card">
      <h4>Reyansh Agrawal</h4>
      <span>Director | Next-Generation Leadership</span>
      <p>
        Reyansh Agrawal focuses on <strong>digital tracking, operational efficiency</strong>,
        and scalable growth while maintaining compliance-first operations.
      </p>
      <p className="vision">
        <strong>Vision:</strong> Technology-driven, customer-first nationwide logistics.
      </p>
    </div>
  </div>
</section>

  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section className="section contact">
      <h2>Contact Information</h2>

      <p><Phone /> +91 98250 76200 / +91 99797 94000</p>
      <p><Mail /> sma0831@gmail.com</p>
      <p>
        <MapPin /> D-70/71, Main Market, Gandhidham, Kutch – 370201, Gujarat
      </p>

      <iframe
        src="https://www.google.com/maps?q=Gandhidham%20Main%20Market&output=embed"
        loading="lazy"
      />
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="footer">
      © 2026 Agrawal Cargo Carrier | All Rights Reserved |
    </footer>
  );
}

/* ================= FLOATING BUTTONS ================= */
function FloatingButtons() {
  return (
    <div className="floating">
      <a href="https://wa.me/919979794000">
        <MessageCircle />
      </a>
      <a href="tel:+919979794000">
        <Phone />
      </a>
    </div>
  );
}
