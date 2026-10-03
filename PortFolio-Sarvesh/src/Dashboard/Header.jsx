import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileHoveredIndex, setMobileHoveredIndex] = useState(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme Variables
  const theme = {
    bg: 'rgba(13, 17, 23, 0.85)',
    border: 'rgba(255, 255, 255, 0.08)',
    textPrimary: '#f0f6fc',
    textSecondary: '#94a3b8',
    accentCyan: '#38bdf8',
    accentPurple: '#a855f7',
    hoverBg: 'rgba(56, 189, 248, 0.1)',
  };

  const HeaderStyle = {
    header: {
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      margin: 0,
      backgroundColor: theme.bg,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${theme.border}`,
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
      zIndex: 1000,
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      boxSizing: 'border-box',
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      height: '75px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
    },
    logo: {
      textDecoration: 'none',
      cursor: 'pointer',
      transform: isLogoHovered ? 'scale(1.02)' : 'scale(1)',
      transition: 'transform 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
    },
    logoText: {
      fontSize: '1.9rem',
      fontWeight: '800',
      letterSpacing: '-0.5px',
      background: `linear-gradient(135deg, ${theme.accentCyan}, ${theme.accentPurple})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: isLogoHovered
        ? '0 0 24px rgba(56, 189, 248, 0.45)'
        : 'none',
      transition: 'text-shadow 0.3s ease',
    },
    navList: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      display: 'inline-block',
    },
    navLink: (isHovered, isActive) => ({
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      color: (isHovered || isActive) ? theme.textPrimary : theme.textSecondary,
      backgroundColor: (isHovered || isActive) ? theme.hoverBg : 'transparent',
      borderBottom: (isHovered || isActive) ? `2px solid ${theme.accentCyan}` : '2px solid transparent',
      boxShadow: (isHovered || isActive) ? '0 0 12px rgba(56, 189, 248, 0.2)' : 'none',
      transition: 'all 0.25s ease',
      cursor: 'pointer',
      display: 'inline-block',
    }),
  };

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Dsa/Cp', path: '/dsa' },
    { name: 'Achivements', path: '/achivements' },
  ];

  return (
    <>
      <style>{`
        /* Responsive Navbar Rules */
        .desktop-nav {
          display: flex !important;
        }
        .mobile-menu-trigger {
          display: none !important;
        }
        .header-logo-full {
          display: inline !important;
        }
        .header-logo-short {
          display: none !important;
        }

        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-trigger {
            display: inline-flex !important;
          }
          .header-logo-full {
            display: none !important;
          }
          .header-logo-short {
            display: inline !important;
          }
        }

        /* Mobile Overlay Entrance Animation */
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-overlay-animate {
          animation: fadeInSlide 0.25s ease-out forwards;
        }
      `}</style>

      <header style={HeaderStyle.header}>
        <nav style={HeaderStyle.nav}>
          {/* Brand Name */}
          <Link
            to="/"
            style={HeaderStyle.logo}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            {/* Full name on desktop screen, compact SS/ on small screens */}
            <span style={HeaderStyle.logoText} className="header-logo-full">
              Sarvesh Suyal
            </span>
            <span style={HeaderStyle.logoText} className="header-logo-short">
              SS/
            </span>
          </Link>

          {/* Desktop Navigation Links (Original Core Logic Preserved) */}
          <ul className="desktop-nav" style={HeaderStyle.navList}>
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={index} style={HeaderStyle.navItem}>
                  <Link
                    to={link.path}
                    style={HeaderStyle.navLink(hoveredIndex === index, isActive)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button (Shown on compact screens) */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Navigation Menu"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              padding: '0.45rem 1.15rem',
              color: '#f0f6fc',
              fontSize: '0.92rem',
              fontWeight: '600',
              cursor: 'pointer',
              letterSpacing: '0.3px',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accentCyan;
              e.currentTarget.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Menu
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer / Overlay (Matches User Design in Image 4) */}
      {isMenuOpen && (
        <div
          className="mobile-overlay-animate"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#070a11',
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.12), transparent)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.5rem',
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          {/* Top Bar inside Overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Logo + Navigation Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  background: `linear-gradient(135deg, ${theme.accentCyan}, ${theme.accentPurple})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SS/
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                NAVIGATION
              </span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                padding: '0.45rem 0.95rem',
                color: '#f0f6fc',
                fontSize: '0.88rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#f43f5e';
                e.currentTarget.style.color = '#f43f5e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = '#f0f6fc';
              }}
            >
              Close ✕
            </button>
          </div>

          {/* Numbered Nav Links List */}
          <nav style={{ marginTop: '1.5rem', width: '100%' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                const isHovered = mobileHoveredIndex === index;
                const formattedNumber = String(index + 1).padStart(2, '0');

                return (
                  <li
                    key={index}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setMobileHoveredIndex(index)}
                      onMouseLeave={() => setMobileHoveredIndex(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.25rem 0.5rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        backgroundColor: (isHovered || isActive)
                          ? 'rgba(56, 189, 248, 0.04)'
                          : 'transparent',
                        borderRadius: '6px',
                      }}
                    >
                      {/* Left: Number + Title */}
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            color: theme.accentCyan,
                            marginRight: '1.25rem',
                            minWidth: '24px',
                          }}
                        >
                          {formattedNumber}
                        </span>
                        <span
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: (isActive || isHovered) ? '#ffffff' : '#cbd5e1',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {link.name}
                        </span>
                      </div>

                      {/* Right: Modern Arrow ↗ */}
                      <span
                        style={{
                          fontSize: '1.35rem',
                          color: (isActive || isHovered) ? theme.accentCyan : '#64748b',
                          transform: isHovered ? 'translate(3px, -3px)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        ↗
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;

