import React, { useState } from 'react';

const Achivement = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Dark Theme Variables matching Header, Footer, and About
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
    accentGold: '#fbbf24',
    accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
    shadowGlow: '0 0 25px rgba(56, 189, 248, 0.15)',
  };

  const achievementStyle = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: theme.textSecondary,
      boxSizing: 'border-box',
    },
    // Top Section
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      borderRadius: '30px',
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      border: '1px solid rgba(251, 191, 36, 0.25)',
      color: theme.accentGold,
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
    // Filters Row
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
    // Grid
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.8rem',
    },
    card: (isHovered) => ({
      backgroundColor: isHovered ? theme.cardHoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.borderHover : theme.border}`,
      boxShadow: isHovered ? theme.shadowGlow : '0 4px 20px rgba(0, 0, 0, 0.25)',
      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      padding: '2rem',
      borderRadius: '16px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }),
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.25rem',
    },
    tag: (type) => {
      let bg = 'rgba(56, 189, 248, 0.1)';
      let color = theme.accentCyan;
      let border = 'rgba(56, 189, 248, 0.25)';

      if (type === 'Hackathon') {
        bg = 'rgba(168, 85, 247, 0.1)';
        color = theme.accentPurple;
        border = 'rgba(168, 85, 247, 0.25)';
      } else if (type === 'Certification') {
        bg = 'rgba(74, 222, 128, 0.1)';
        color = theme.accentGreen;
        border = 'rgba(74, 222, 128, 0.25)';
      } else if (type === 'Competitive') {
        bg = 'rgba(251, 191, 36, 0.1)';
        color = theme.accentGold;
        border = 'rgba(251, 191, 36, 0.25)';
      }

      return {
        fontSize: '0.78rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        padding: '4px 10px',
        borderRadius: '6px',
        backgroundColor: bg,
        color: color,
        border: `1px solid ${border}`,
      };
    },
    cardIcon: {
      fontSize: '2rem',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '0.5rem',
    },
    issuer: {
      fontSize: '0.88rem',
      fontWeight: '600',
      color: theme.accentCyan,
      marginBottom: '1rem',
      display: 'inline-block',
    },
    cardDesc: {
      fontSize: '0.94rem',
      lineHeight: '1.65',
      color: theme.textSecondary,
      marginBottom: '1.5rem',
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: `1px solid ${theme.border}`,
      paddingTop: '1rem',
      marginTop: 'auto',
    },
    dateText: {
      fontSize: '0.84rem',
      color: theme.textMuted,
    },
    verifyLink: {
      textDecoration: 'none',
      fontSize: '0.88rem',
      fontWeight: '600',
      color: theme.accentCyan,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      transition: 'gap 0.2s ease',
    },
  };

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH)',
      category: 'Hackathon',
      issuer: 'Ministry of Education & College Level',
      desc: 'Shortlisted at the college level for designing an innovative technological solution addressing critical real-world problem statements under time constraints.',
      icon: '🏆',
      date: 'National Level Initiative',
      linkText: 'Hackathon Project',
      linkUrl: 'https://github.com/sarveshsuyal',
    },
    {
      title: '235+ DSA Problems Solved',
      category: 'Competitive',
      issuer: 'LeetCode & Codeforces',
      desc: 'Consistent problem solver with a deep grasp of Arrays, Dynamic Programming, Trees, Graphs, and Greedy algorithms across competitive platforms.',
      icon: '⚡',
      date: 'Ongoing Practice',
      linkText: 'View Profile',
      linkUrl: 'https://leetcode.com/u/SARVESHSUYAL/',
    },
    {
      title: '1400+ Competitive Rating',
      category: 'Competitive',
      issuer: 'LeetCode CP Contest',
      desc: 'Participated in rated global weekly and biweekly contests, demonstrating rapid algorithmic formulation and optimized time/space complexity.',
      icon: '🎯',
      date: 'Ranked Competitor',
      linkText: 'Contest Stats',
      linkUrl: 'https://leetcode.com/u/Sarvesh112k/',
    },
    {
      title: 'AWS Cloud Foundations',
      category: 'Certification',
      issuer: 'Amazon Web Services (AWS)',
      desc: 'Completed training covering foundational cloud architecture, security (IAM), compute (EC2), scalable storage (S3), and networking (VPC).',
      icon: '☁️',
      date: 'Certified',
      linkText: 'AWS Academy',
      linkUrl: '#',
    },
    {
      title: 'AWS Cloud Essentials',
      category: 'Certification',
      issuer: 'Amazon Web Services (AWS)',
      desc: 'Validated understanding of core AWS cloud services, high availability, fault tolerance, and cloud economics.',
      icon: '🛡️',
      date: 'Certified',
      linkText: 'AWS Credential',
      linkUrl: '#',
    },
    {
      title: '5–6+ Hackathon Participations',
      category: 'Hackathon',
      issuer: 'College & Inter-College Events',
      desc: 'Collaborated in multidisciplinary teams to prototype full-stack and AI-driven products within 24–48 hour high-pressure hackathons.',
      icon: '💡',
      date: '2024 – Present',
      linkText: 'Explore Repos',
      linkUrl: 'https://github.com/sarveshsuyal',
    },
  ];

  const categories = ['All', 'Hackathon', 'Competitive', 'Certification'];

  const filteredAchievements = activeFilter === 'All'
    ? achievements
    : achievements.filter((item) => item.category === activeFilter);

  return (
    <div style={achievementStyle.container}>
      {/* Top Banner Badge */}
      <div style={achievementStyle.badge}>
        <span>🌟</span>
        <span>RECOGNITION & CREDENTIALS</span>
      </div>

      {/* Main Heading */}
      <h1 style={achievementStyle.heading}>
        Honors, <span style={achievementStyle.gradientText}>Achievements</span> & Certifications
      </h1>

      <p style={achievementStyle.subtitle}>
        Milestones highlighting competitive programming performance, national hackathons, and certified cloud competencies.
      </p>

      {/* Interactive Category Filter */}
      <div style={achievementStyle.filterRow}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            style={achievementStyle.filterBtn(activeFilter === cat)}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'All' ? '⚡ All Milestones' : cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div style={achievementStyle.grid}>
        {filteredAchievements.map((item, idx) => (
          <div
            key={idx}
            style={achievementStyle.card(hoveredCard === idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div style={achievementStyle.cardHeader}>
                <span style={achievementStyle.tag(item.category)}>{item.category}</span>
                <span style={achievementStyle.cardIcon}>{item.icon}</span>
              </div>
              <h3 style={achievementStyle.cardTitle}>{item.title}</h3>
              <span style={achievementStyle.issuer}>{item.issuer}</span>
              <p style={achievementStyle.cardDesc}>{item.desc}</p>
            </div>

            <div style={achievementStyle.cardFooter}>
              <span style={achievementStyle.dateText}>{item.date}</span>
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noreferrer"
                style={achievementStyle.verifyLink}
              >
                {item.linkText} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivement;
