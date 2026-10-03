import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  // Dark Theme Variables matching Header and Footer
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
    accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
    shadowGlow: '0 0 25px rgba(56, 189, 248, 0.15)',
  };

  const textStyle = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: theme.textSecondary,
      boxSizing: 'border-box',
    },
    // Top Hero Section
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
      fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
      fontWeight: '800',
      lineHeight: '1.2',
      color: theme.textPrimary,
      margin: '0 0 1.25rem 0',
      letterSpacing: '-1px',
    },
    gradientText: {
      background: theme.accentGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    bioText: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: theme.textSecondary,
      maxWidth: '850px',
      margin: '0 0 2.5rem 0',
    },
    highlight: {
      color: theme.textPrimary,
      fontWeight: '600',
    },
    // Quick Stats Bar
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '4rem',
    },
    statCard: (isHovered) => ({
      backgroundColor: isHovered ? theme.cardHoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.borderHover : theme.border}`,
      boxShadow: isHovered ? theme.shadowGlow : 'none',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      padding: '1.5rem',
      borderRadius: '12px',
      textAlign: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default',
    }),
    statNumber: {
      fontSize: '2.2rem',
      fontWeight: '800',
      background: theme.accentGradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.3rem',
    },
    statLabel: {
      fontSize: '0.88rem',
      color: theme.textMuted,
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    // Pillars Section
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '0.6rem',
    },
    sectionSubtitle: {
      fontSize: '0.95rem',
      color: theme.textMuted,
      marginBottom: '2rem',
    },
    pillarsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.8rem',
      marginBottom: '3.5rem',
    },
    pillarCard: (isHovered) => ({
      backgroundColor: isHovered ? theme.cardHoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.borderHover : theme.border}`,
      boxShadow: isHovered ? theme.shadowGlow : '0 4px 20px rgba(0, 0, 0, 0.25)',
      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      padding: '2rem',
      borderRadius: '14px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    pillarIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'inline-block',
    },
    pillarTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '0.75rem',
    },
    pillarDesc: {
      fontSize: '0.94rem',
      lineHeight: '1.65',
      color: theme.textSecondary,
      margin: 0,
    },
    // CTA Button Bar
    actionRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      background: theme.accentGradient,
      color: '#ffffff',
      fontWeight: '600',
      padding: '0.85rem 1.8rem',
      borderRadius: '10px',
      fontSize: '0.95rem',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: isBtnHovered ? '0 0 25px rgba(56, 189, 248, 0.4)' : '0 4px 15px rgba(56, 189, 248, 0.2)',
      transform: isBtnHovered ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all 0.25s ease',
      cursor: 'pointer',
    },
    secondaryBtn: {
      background: 'transparent',
      color: theme.textPrimary,
      fontWeight: '600',
      padding: '0.85rem 1.8rem',
      borderRadius: '10px',
      fontSize: '0.95rem',
      textDecoration: 'none',
      border: `1px solid ${theme.border}`,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.25s ease',
    },
  };

  const stats = [
    { number: '235+', label: 'Problems Solved (LeetCode)' },
    { number: '1400+', label: 'Contest Rating' },
    { number: '4+', label: 'Flagship Projects' },
    { number: '5+', label: 'Hackathons Competed' },
  ];

  const pillars = [
    {
      icon: '🧠',
      title: 'AI & Machine Learning',
      desc: 'Developing Computer Vision pipelines with OpenCV & MediaPipe, real-time gesture translation, and predictive ML models for decision-making.',
    },
    {
      icon: '⚡',
      title: 'Full Stack Engineering',
      desc: 'Architecting fast, responsive web applications using React, Node.js, Flask, and Django with PostgreSQL & MongoDB backends.',
    },
    {
      icon: '🎯',
      title: 'Core Algorithms & Cloud',
      desc: 'Solid foundation in Data Structures, Algorithms, OS, DBMS, along with hands-on AWS cloud deployment (EC2, S3, IAM, VPC).',
    },
  ];

  return (
    <div style={textStyle.container}>
      {/* Introduction Badge */}
      <div style={textStyle.badge}>
        <span>👋</span>
        <span>HELLO, I'M SARVESH SUYAL</span>
      </div>

      {/* Main Headline */}
      <h1 style={textStyle.heading}>
        Engineering <span style={textStyle.gradientText}>Intelligent Systems</span> & Scalable Full-Stack Products.
      </h1>

      {/* Bio Paragraph */}
      <p style={textStyle.bioText}>
        I am a Computer Science & Engineering undergraduate specializing in{' '}
        <span style={textStyle.highlight}>Artificial Intelligence & Machine Learning</span> at{' '}
        <span style={textStyle.highlight}>Graphic Era Hill University</span> (Batch 2024–2028). 
        Driven by a passion for competitive programming, algorithmic optimization, and deploying practical AI solutions—from real-time sign language translators to OCR-based solvers and cloud-backed platforms.
      </p>

      {/* Key Metrics / Stats Bar */}
      <div style={textStyle.statsGrid}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={textStyle.statCard(hoveredStat === idx)}
            onMouseEnter={() => setHoveredStat(idx)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <div style={textStyle.statNumber}>{stat.number}</div>
            <div style={textStyle.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Core Engineering Pillars */}
      <div>
        <h2 style={textStyle.sectionTitle}>What I Bring To The Table</h2>
        <p style={textStyle.sectionSubtitle}>
          Combining competitive algorithmic rigor with end-to-end software development.
        </p>

        <div style={textStyle.pillarsGrid}>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={textStyle.pillarCard(hoveredCard === idx)}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={textStyle.pillarIcon}>{pillar.icon}</span>
              <h3 style={textStyle.pillarTitle}>{pillar.title}</h3>
              <p style={textStyle.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={textStyle.actionRow}>
        <Link
          to="/projects"
          style={textStyle.primaryBtn}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
        >
          Explore Projects →
        </Link>
        <a
          href="mailto:sarvesh112k@gmail.com"
          style={textStyle.secondaryBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.accentCyan;
            e.currentTarget.style.color = theme.accentCyan;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.border;
            e.currentTarget.style.color = theme.textPrimary;
          }}
        >
          Get In Touch ✉
        </a>
      </div>
    </div>
  );
};

export default About;
