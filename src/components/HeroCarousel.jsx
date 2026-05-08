import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { BACKEND_URL } from "../api";

const slides = [
  {
    title: "Filter Press",
    location: "Supplier",
    subtitle: "Industrial Filtration Excellence",
    description:
      "Advanced filter press systems engineered for high-efficiency solid-liquid separation across industrial wastewater and sludge treatment applications.",
    image: `https://res.cloudinary.com/domq86row/image/upload/v1778251631/WhatsApp_Image_2026-05-04_at_3.13.17_PM_z5ohlv.jpg`,
    accent: "#2563eb",
    accentLight: "#60a5fa",
    badgeBg: "#eff6ff",
    badgeColor: "#2563eb",
  },
  {
    title: "High Performance",
    location: "Systems",
    subtitle: "Heavy Duty Industrial Solutions",
    description:
      "Reliable filtration technology for chemical, pharma, food processing, and mining industries with maximum durability and output.",
    image: "https://res.cloudinary.com/domq86row/image/upload/v1778251631/WhatsApp_Image_2026-05-04_at_3.13.23_PM_snrp8o.jpg",
    accent: "#dc2626",
    accentLight: "#f87171",
    badgeBg: "#fef2f2",
    badgeColor: "#dc2626",
  },
  {
    title: "Vastu &",
    location: "Spiritual",
    subtitle: "Traditional Energy Solutions",
    description:
      "Premium handcrafted vastu products designed to enhance positivity, balance, and prosperity for homes and workplaces.",
    image: "https://res.cloudinary.com/domq86row/image/upload/v1778251631/WhatsApp_Image_2026-05-04_at_3.13.11_PM_sdynan.jpg",
    accent: "#16a34a",
    accentLight: "#4ade80",
    badgeBg: "#f0fdf4",
    badgeColor: "#16a34a",
  },
];

export default function IndustrialHero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 200);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 200);
  };

  const slide = slides[current];

  return (
    <div className="industrial-hero">
      <div className="industrial-hero__container">
        {/* Left Content */}
        <div className={`hero-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="hero-badge" style={{ 
            background: slide.badgeBg,
            color: slide.badgeColor
          }}>
            <span className="hero-badge__dot" style={{ background: slide.accent }}></span>
            {slide.subtitle}
          </div>

          <h1 className="hero-title">
            <span className="hero-title__main">{slide.title}</span>
            <span className="hero-title__location" style={{ color: slide.accent }}>
              {" "}{slide.location}
            </span>
          </h1>

          <p className="hero-description">{slide.description}</p>

          {/* Button Group */}
          <div className="hero-actions">
            <button
              onClick={() => navigate("/contact")}
              className="hero-btn hero-btn--primary"
              style={{ background: slide.accent }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get Quote
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="hero-btn hero-btn--secondary"
              style={{ borderColor: `${slide.accent}30`, color: slide.accent }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Shop Products
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={slide.accent} strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>ISO Certified</span>
            </div>
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={slide.accent} strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={slide.accent} strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Quick Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className={`hero-card-wrapper ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="hero-card">
            {/* Colorful Background Gradient matching the product */}
            <div className="hero-card__bg" style={{ 
              background: `radial-gradient(circle at 30% 40%, ${slide.accentLight}15, transparent 70%)` 
            }}></div>
            
            {/* Accent Border */}
            <div className="hero-card__border" style={{ borderColor: `${slide.accent}20` }}></div>
            
            {/* Image Container with Color Overlay */}
            <div className="hero-card__image-container">
              <div className="image-wrapper">
                <img src={slide.image} alt={slide.title} />
                <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${slide.accent}08, transparent)` }}></div>
              </div>
            </div>

            {/* Color Accent Strip */}
            <div className="hero-card__accent-strip" style={{ background: slide.accent }}></div>

            {/* Corner Decorations */}
            <div className="card-corner card-corner--tl" style={{ borderColor: slide.accent }}></div>
            <div className="card-corner card-corner--tr" style={{ borderColor: slide.accent }}></div>
            <div className="card-corner card-corner--bl" style={{ borderColor: slide.accent }}></div>
            <div className="card-corner card-corner--br" style={{ borderColor: slide.accent }}></div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="hero-navigation">
        <button className="hero-nav hero-nav--prev" onClick={handlePrev} style={{ borderColor: `${slide.accent}30` }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="hero-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${current === idx ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              style={{ background: current === idx ? slides[idx].accent : "#e2e8f0" }}
            />
          ))}
        </div>

        <button className="hero-nav hero-nav--next" onClick={handleNext} style={{ borderColor: `${slide.accent}30` }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .industrial-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: #ffffff;
          display: flex;
          align-items: center;
          padding: 4rem 2rem;
        }

        .industrial-hero__container {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }

        /* Animations */
        .fade-out {
          animation: contentFadeOut 0.2s ease forwards;
        }

        .fade-in {
          animation: contentFadeIn 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }

        @keyframes contentFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(10px); }
        }

        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Left Content */
        .hero-content {
          flex: 1;
          min-width: 320px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          margin-bottom: 1.75rem;
        }

        .hero-badge__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .hero-title {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1e293b;
          margin: 0 0 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-title__location {
          display: inline-block;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
          max-width: 540px;
          margin: 0 0 2rem;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          letter-spacing: 0.3px;
        }

        .hero-btn--primary {
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }

        .hero-btn--primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .hero-btn--secondary {
          background: #ffffff;
          border: 1px solid;
        }

        .hero-btn--secondary:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }

        /* Trust Indicators */
        .hero-trust {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .trust-item svg {
          opacity: 0.8;
        }

        /* Right Card */
        .hero-card-wrapper {
          flex: 1;
          min-width: 320px;
          display: flex;
          justify-content: center;
        }

        .hero-card {
          position: relative;
          width: 100%;
          max-width: 480px;
          border-radius: 32px;
          background: #ffffff;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.15);
        }

        .hero-card__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .hero-card__border {
          position: absolute;
          inset: 0;
          border: 1px solid;
          border-radius: 32px;
          pointer-events: none;
          z-index: 1;
        }

        .hero-card__image-container {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 1.5rem;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          background: #f8fafc;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .hero-card:hover .image-wrapper img {
          transform: scale(1.03);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-card__accent-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          z-index: 3;
        }

        /* Corner Decorations */
        .card-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-width: 1.5px;
          border-style: solid;
          border-color: transparent;
          transition: all 0.3s ease;
          z-index: 3;
        }

        .card-corner--tl {
          top: 1.25rem;
          left: 1.25rem;
          border-top-width: 1.5px;
          border-left-width: 1.5px;
        }

        .card-corner--tr {
          top: 1.25rem;
          right: 1.25rem;
          border-top-width: 1.5px;
          border-right-width: 1.5px;
        }

        .card-corner--bl {
          bottom: 1.25rem;
          left: 1.25rem;
          border-bottom-width: 1.5px;
          border-left-width: 1.5px;
        }

        .card-corner--br {
          bottom: 1.25rem;
          right: 1.25rem;
          border-bottom-width: 1.5px;
          border-right-width: 1.5px;
        }

        .hero-card:hover .card-corner {
          width: 32px;
          height: 32px;
        }

        /* Navigation */
        .hero-navigation {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          z-index: 10;
          background: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .hero-nav {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-nav:hover {
          background: #f1f5f9;
          transform: scale(1.05);
          color: #1e293b;
        }

        .hero-dots {
          display: flex;
          gap: 0.5rem;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .hero-dot.active {
          width: 28px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .industrial-hero {
            padding: 4rem 1.5rem;
          }
          .industrial-hero__container {
            flex-direction: column;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-trust {
            justify-content: center;
          }
          .hero-card {
            max-width: 400px;
          }
          .hero-navigation {
            bottom: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-btn {
            padding: 0.7rem 1.5rem;
          }
          .hero-trust {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}