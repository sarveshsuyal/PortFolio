import React, { useState } from 'react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Dark Theme Variables matching Header, Footer, About, DSA
  const theme = {
    bg: '#0b0f19',
    cardBg: 'rgba(255, 255, 255, 0.03)',
    cardHoverBg: 'rgba(56, 189, 248, 0.06)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(56, 189, 248, 0.35)',
    textPrimary: '#f0f6fc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    accentCyan: '#38bdf8',
    accentPurple: '#a855f7',
    accentGreen: '#4ade80',
    accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
    shadowGlow: '0 0 25px rgba(56, 189, 248, 0.15)',
  };

  const projectStyle = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: theme.textSecondary,
      boxSizing: 'border-box',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      borderRadius: '30px',
      backgroundColor: 'rgba(56, 189, 248, 0.1)',
      border: '1px solid rgba(56, 189, 248, 0.25)',
      color: theme.accentCyan,
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      marginBottom: '1.25rem',
    },
    heading: {
      fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
      fontWeight: '800',
      lineHeight: '1.2',
      color: theme.textPrimary,
      margin: '0 0 1rem 0',
      letterSpacing: '-1px',
    },
    gradientText: {
      background: theme.accentGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: theme.textSecondary,
      maxWidth: '800px',
      margin: '0 0 2.5rem 0',
    },
    filterRow: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      marginBottom: '3rem',
    },
    filterBtn: (isActive) => ({
      padding: '0.55rem 1.25rem',
      borderRadius: '25px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      border: `1px solid ${isActive ? theme.accentCyan : theme.border}`,
      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : theme.cardBg,
      color: isActive ? theme.accentCyan : theme.textSecondary,
      transition: 'all 0.25s ease',
      outline: 'none',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '2rem',
    },
    card: (isHovered) => ({
      backgroundColor: isHovered ? theme.cardHoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.borderHover : theme.border}`,
      boxShadow: isHovered ? theme.shadowGlow : '0 4px 20px rgba(0, 0, 0, 0.25)',
      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      padding: '2rem',
      borderRadius: '16px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }),
    cardTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    categoryTag: {
      fontSize: '0.78rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      padding: '4px 10px',
      borderRadius: '6px',
      backgroundColor: 'rgba(168, 85, 247, 0.12)',
      color: theme.accentPurple,
      border: '1px solid rgba(168, 85, 247, 0.25)',
    },
    cardIcon: {
      fontSize: '1.8rem',
    },
    cardTitle: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: theme.textPrimary,
      margin: '0 0 0.8rem 0',
    },
    cardDesc: {
      fontSize: '0.94rem',
      lineHeight: '1.65',
      color: theme.textSecondary,
      marginBottom: '1.25rem',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      fontSize: '0.88rem',
      color: theme.textMuted,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      lineHeight: '1.5',
    },
    tagGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.8rem',
    },
    techTag: {
      fontSize: '0.78rem',
      fontWeight: '600',
      padding: '3px 9px',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: theme.textSecondary,
      border: `1px solid ${theme.border}`,
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.9rem',
      borderTop: `1px solid ${theme.border}`,
      paddingTop: '1.2rem',
      marginTop: 'auto',
    },
    actionBtn: (isPrimary) => ({
      textDecoration: 'none',
      fontSize: '0.86rem',
      fontWeight: '600',
      padding: '0.55rem 1.1rem',
      borderRadius: '8px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      backgroundColor: isPrimary ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
      color: isPrimary ? theme.accentCyan : theme.textSecondary,
      border: `1px solid ${isPrimary ? theme.accentCyan : theme.border}`,
    }),
  };

  const projectsData = [
    {
      title: 'Sign Language to Text Translator',
      category: 'AI & ML',
      icon: '🤟',
      desc: 'An AI-powered computer vision pipeline designed to bridge communication barriers by translating real-time sign gestures into live text.',
      features: [
        'Real-time hand landmark extraction using MediaPipe at 30 FPS.',
        'Custom CNN architecture deployed via lightweight Flask API.',
        'Engineered for accessibility for the hearing & speech-impaired community.',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Flask'],
      github: 'https://github.com/sarveshsuyal',
      demo: '#',
    },
    {
      title: 'Crime Prediction Digital Twin',
      category: 'Data Science',
      icon: '🏙️',
      desc: 'An intelligent predictive system modeling urban crime hotspots by analyzing historical municipal crime patterns.',
      features: [
        'Supervised ML algorithms trained on spatio-temporal datasets using Scikit-learn.',
        'Interactive Streamlit visual dashboard for decision support & resource allocation.',
        'Identifies high-probability risk sectors to aid municipal public-safety planning.',
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Data Modeling'],
      github: 'https://github.com/sarveshsuyal',
      demo: '#',
    },
    {
      title: 'OCR Sudoku Solver',
      category: 'Algorithms',
      icon: '🧩',
      desc: 'Computer vision and algorithmic solver capable of scanning Sudoku boards from images and computing verified solutions in milliseconds.',
      features: [
        'OCR grid extraction using Tesseract.js with image pre-processing.',
        'Optimized backtracking algorithm with constraint propagation (<15ms compute).',
        'Interactive TypeScript & Tailwind interface for solving and manual puzzle play.',
      ],
      tech: ['Django', 'TypeScript', 'Tesseract.js', 'Tailwind CSS', 'Backtracking'],
      github: 'https://github.com/sarveshsuyal',
      demo: '#',
    },
    {
      title: 'Smart Bus Tracking System',
      category: 'Full Stack',
      icon: '🚌',
      desc: 'A full-stack transit management platform providing real-time transit telemetry, route visualization, and automated ETA calculations.',
      features: [
        'Interactive map-based bus tracking and nearest stop calculation via Leaflet.js.',
        'Scalable REST APIs built with Node.js, Express, and MongoDB geospatial queries.',
        'User-first responsive dashboard designed to eliminate public transit wait times.',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Leaflet.js', 'JavaScript', 'REST APIs'],
      github: 'https://github.com/sarveshsuyal',
      demo: '#',
    },
  ];

  const categories = ['All', 'AI & ML', 'Full Stack', 'Algorithms', 'Data Science'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div style={projectStyle.container}>
      {/* Top Badge */}
      <div style={projectStyle.badge}>
        <span>💼</span>
        <span>PORTFOLIO SHOWCASE</span>
      </div>

      {/* Main Heading */}
      <h1 style={projectStyle.heading}>
        Featured <span style={projectStyle.gradientText}>Engineering Projects</span>
      </h1>

      <p style={projectStyle.subtitle}>
        Production-ready applications spanning Deep Learning, Computer Vision pipelines, algorithmic constraint solvers, and real-time full-stack systems.
      </p>

      {/* Filter Tabs */}
      <div style={projectStyle.filterRow}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            style={projectStyle.filterBtn(activeFilter === cat)}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'All' ? '⚡ All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={projectStyle.grid}>
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            style={projectStyle.card(hoveredCard === idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div style={projectStyle.cardTop}>
                <span style={projectStyle.categoryTag}>{project.category}</span>
                <span style={projectStyle.cardIcon}>{project.icon}</span>
              </div>

              <h3 style={projectStyle.cardTitle}>{project.title}</h3>
              <p style={projectStyle.cardDesc}>{project.desc}</p>

              {/* Key Features Bullet List */}
              <ul style={projectStyle.featureList}>
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} style={projectStyle.featureItem}>
                    <span style={{ color: theme.accentCyan, flexShrink: 0 }}>▹</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div style={projectStyle.tagGroup}>
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} style={projectStyle.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={projectStyle.cardFooter}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={projectStyle.actionBtn(true)}
              >
                GitHub Repo ↗
              </a>
              <a
                href={project.demo}
                style={projectStyle.actionBtn(false)}
                onClick={(e) => {
                  if (project.demo === '#') {
                    e.preventDefault();
                    alert('Live demo link / walkthrough coming soon!');
                  }
                }}
              >
                Live Demo ⚡
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
