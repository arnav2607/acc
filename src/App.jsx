import { Routes, Route, Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
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
function Header() {
  return (
    <header className="header">
      <h1>Agarwal Cargo Carrier</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <section className="section hero">
      <div className="hero-text">
        <h2>Pan-India Logistics for Industrial & Hazardous Gases</h2>
        <p>LPG • Ammonia • Chemical Transportation</p>

        <div className="actions">
          <a href="tel:+919979794000">Call Now</a>
          <a href="https://wa.me/919979794000">WhatsApp</a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
        alt="Logistics Truck"
      />

      <div className="truck-animation">
        <Truck size={48} />
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="section services">
      <h2>Our Services</h2>

      <div className="service-cards">
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80"
            alt="LPG Transport"
          />
          <h3>LPG Gas Transportation</h3>
          <p>
            PESO-approved LPG transportation across India with strict safety
            checks, trained drivers, and real-time monitoring.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80"
            alt="Ammonia Logistics"
          />
          <h3>Ammonia Logistics</h3>
          <p>
            Specialized ammonia gas movement using certified tankers and
            compliance-driven logistics processes.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80"
            alt="Chemical Transport"
          />
          <h3>Chemical Transportation</h3>
          <p>
            Secure industrial chemical transport with safety valves, GPS
            tracking, and experienced handling teams.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section className="section about">
      <h2>About Us</h2>

      <p className="about-intro">
        Agarwal Cargo Carrier is a trusted logistics company specializing in the
        transportation of industrial and hazardous gases across India.
      </p>

      <div className="directors">
        <div className="director">
          <h3>Sanjay Agarwal</h3>
          <span>Director | 25+ Years Experience</span>
          <p>
            With over 25 years in the logistics industry, Sanjay Agarwal laid the
            foundation of Agarwal Cargo Carrier with a strong focus on safety,
            trust, and long-term partnerships.
          </p>
          <p className="vision">
            Vision: To build India’s most reliable and safety-driven gas
            logistics company.
          </p>
        </div>

        <div className="director">
          <h3>Reyansh Agarwal</h3>
          <span>Director | Next-Generation Leadership</span>
          <p>
            Reyansh Agarwal brings modern operational strategies, technology
            adoption, and efficiency-focused growth to the organization.
          </p>
          <p className="vision">
            Vision: To scale operations nationwide with digital tracking,
            compliance excellence, and customer-first service.
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
      <h2>Contact Us</h2>

      <p><Phone /> Reyansh Agarwal – 99797 94000</p>
      <p><Mail /> info@agarwalcargo.com</p>
      <p><MapPin /> D 70-71, Main Market, Gandhidham – 370201, Gujarat</p>

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
      © 2026 Agarwal Cargo Carrier. All rights reserved.
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
