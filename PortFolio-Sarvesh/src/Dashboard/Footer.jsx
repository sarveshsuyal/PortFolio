import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isTopHovered, setIsTopHovered] = useState(false);

  // Theme Variables (Matching Header)
  const theme = {
    bg: 'rgba(11, 15, 25, 0.95)',
    border: 'rgba(255, 255, 255, 0.08)',
    textPrimary: '#f0f6fc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    accentCyan: '#38bdf8',
    accentPurple: '#a855f7',
    hoverBg: 'rgba(56, 189, 248, 0.1)',
    cardBg: 'rgba(255, 255, 255, 0.03)',
  };

  const Footerstyle = {
    footer: {
      width: '100%',
      marginTop: 'auto', // Ensures it stays pushed to the bottom
      position: 'relative',
      left: 0,
      margin: 0,
      backgroundColor: theme.bg,
      borderTop: `1px solid ${theme.border}`,
      boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.35)',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: theme.textSecondary,
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '3.5rem 2rem 1.5rem 2rem',
      boxSizing: 'border-box',
    },
    topGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '2.5rem',
      marginBottom: '3rem',
    },
    brandTitle: {
      fontSize: '1.6rem',
      fontWeight: '800',
      letterSpacing: '-0.5px',
      margin: '0 0 0.6rem 0',
      background: `linear-gradient(135deg, ${theme.accentCyan}, ${theme.accentPurple})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    brandDesc: {
      fontSize: '0.92rem',
      lineHeight: '1.6',
      color: theme.textSecondary,
      margin: '0 0 1.2rem 0',
    },
    statusBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      borderRadius: '20px',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.25)',
      fontSize: '0.8rem',
      color: '#4ade80',
      fontWeight: '600',
    },
    pulseDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#22c55e',
      boxShadow: '0 0 10px #22c55e',
    },
    colTitle: {
      fontSize: '1rem',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '1.2rem',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    linkItem: (isHovered) => ({
      textDecoration: 'none',
      fontSize: '0.92rem',
      color: isHovered ? theme.accentCyan : theme.textSecondary,
      transition: 'all 0.2s ease',
      display: 'inline-block',
      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
    }),
    socialBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    socialLink: (isHovered) => ({
      textDecoration: 'none',
      fontSize: '0.88rem',
      color: isHovered ? theme.textPrimary : theme.textSecondary,
      backgroundColor: isHovered ? theme.hoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.accentCyan : theme.border}`,
      padding: '0.55rem 0.85rem',
      borderRadius: '8px',
      transition: 'all 0.25s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.5rem',
    }),
    bottomBar: {
      borderTop: `1px solid ${theme.border}`,
      paddingTop: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      fontSize: '0.86rem',
      color: theme.textMuted,
    },
    backToTopBtn: {
      background: theme.cardBg,
      border: `1px solid ${isTopHovered ? theme.accentCyan : theme.border}`,
      color: isTopHovered ? theme.textPrimary : theme.textSecondary,
      padding: '6px 14px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.84rem',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.25s ease',
      outline: 'none',
    },
  };

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'DSA / CP', path: '/dsa' },
    { name: 'Achievements', path: '/achivements' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', handle: 'Sarvesh Suyal', url: 'https://www.linkedin.com/in/sarvesh-suyal-820a9132a/' },
    { name: 'GitHub', handle: '@sarveshsuyal', url: 'https://github.com/sarveshsuyal' },
    { name: 'LeetCode', handle: '235+ Solved', url: 'https://leetcode.com/u/SARVESHSUYAL/' },
    { name: 'Codeforces', handle: '1200+ Rating', url: 'https://codeforces.com/profile/SarveshSuyal' },
    { name: 'LeetCode CP', handle: '1400+ Rating', url: 'https://leetcode.com/u/Sarvesh112k/' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={Footerstyle.footer}>
      <div style={Footerstyle.container}>
        {/* Top Grid Section */}
        <div style={Footerstyle.topGrid}>
          {/* Column 1: Brand & Mission */}
          <div>
            <span style={Footerstyle.brandTitle}>Sarvesh Suyal</span>
            <p style={Footerstyle.brandDesc}>
              B.Tech in CSE (AI & ML) • Passionate about building intelligent systems, full-stack applications, and scalable software solutions.
            </p>
            {/* Recruiter Live Status Badge */}
            <div style={Footerstyle.statusBadge}>
              <span style={Footerstyle.pulseDot}></span>
              <span>Available for Internships & Projects</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={Footerstyle.colTitle}>Navigation</h4>
            <ul style={Footerstyle.linkList}>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    style={Footerstyle.linkItem(hoveredLink === idx)}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coding & Professional Profiles */}
          <div>
            <h4 style={Footerstyle.colTitle}>Profiles & Competitive</h4>
            <div style={Footerstyle.socialBox}>
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  style={Footerstyle.socialLink(hoveredSocial === idx)}
                  onMouseEnter={() => setHoveredSocial(idx)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>{item.name}</span>
                  <span style={{ fontSize: '0.78rem', color: hoveredSocial === idx ? theme.accentCyan : theme.textMuted, whiteSpace: 'nowrap' }}>{item.handle} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact / Direct Connect */}
          <div>
            <h4 style={Footerstyle.colTitle}>Let's Connect</h4>
            <p style={{ ...Footerstyle.brandDesc, marginBottom: '1rem' }}>
              Have an opening, collaboration, or idea? Feel free to reach out directly.
            </p>
            <a
              href="mailto:sarvesh112k@gmail.com"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                background: `linear-gradient(135deg, ${theme.accentCyan}, ${theme.accentPurple})`,
                color: '#ffffff',
                fontWeight: '600',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(56, 189, 248, 0.25)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              ✉ sarvesh112k@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div style={Footerstyle.bottomBar}>
          <div>
            © {currentYear} Sarvesh Suyal. All rights reserved.
          </div>
          <div>
            Designed with <span style={{ color: theme.accentCyan }}>React</span> & Passion for Code
          </div>
          <button
            style={Footerstyle.backToTopBtn}
            onClick={scrollToTop}
            onMouseEnter={() => setIsTopHovered(true)}
            onMouseLeave={() => setIsTopHovered(false)}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

