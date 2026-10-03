import React, { useState } from 'react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  // Dark Theme Variables matching Header, Footer, About, Projects, DSA
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

  const skillsStyle = {
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
      maxWidth: '820px',
      margin: '0 0 2.5rem 0',
    },
    tabRow: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      marginBottom: '3rem',
    },
    tabBtn: (isActive) => ({
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
      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      padding: '2rem',
      borderRadius: '16px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
    }),
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '1rem',
    },
    cardIcon: {
      fontSize: '1.8rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: theme.textPrimary,
      margin: 0,
    },
    cardDesc: {
      fontSize: '0.9rem',
      color: theme.textMuted,
      lineHeight: '1.5',
      marginBottom: '1.5rem',
    },
    skillsWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.65rem',
      marginTop: 'auto',
    },
    skillBadge: (isItemHovered) => ({
      fontSize: '0.86rem',
      fontWeight: '500',
      padding: '6px 13px',
      borderRadius: '8px',
      backgroundColor: isItemHovered ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
      color: isItemHovered ? theme.accentCyan : theme.textPrimary,
      border: `1px solid ${isItemHovered ? theme.accentCyan : theme.border}`,
      transition: 'all 0.2s ease',
      cursor: 'default',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
    }),
  };

  const skillCategories = [
    {
      category: 'Languages',
      title: 'Programming Languages',
      icon: '💻',
      desc: 'High-performance and script languages used for algorithmic programming and production apps.',
      skills: ['C++', 'Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'C'],
    },
    {
      category: 'Web Dev',
      title: 'Web & Full Stack Frameworks',
      icon: '🌐',
      desc: 'Frontend libraries, backend architectures, and API frameworks for scalable systems.',
      skills: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'HTML5 / CSS3', 'Tailwind CSS', 'REST APIs'],
    },
    {
      category: 'AI / ML',
      title: 'Machine Learning & Vision',
      icon: '🧠',
      desc: 'Deep learning models, computer vision pipelines, and predictive data systems.',
      skills: ['OpenCV', 'MediaPipe', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Modeling', 'Streamlit'],
    },
    {
      category: 'Cloud & DB',
      title: 'Cloud & Database Infrastructure',
      icon: '☁️',
      desc: 'Relational & NoSQL database management along with secure AWS cloud services.',
      skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC', 'CloudFront', 'MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools',
      title: 'Developer Tools & Libraries',
      icon: '⚙️',
      desc: 'Tooling, version control, API testing suites, and specialized libraries.',
      skills: ['Git', 'GitHub', 'Linux / Bash', 'VS Code', 'Postman', 'Leaflet.js', 'Tesseract.js OCR'],
    },
    {
      category: 'Core CS',
      title: 'Core Computer Science',
      icon: '🎓',
      desc: 'Foundational concepts essential for clean engineering and low-level optimization.',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ];

  const tabs = ['All', 'Languages', 'Web Dev', 'AI / ML', 'Cloud & DB', 'Core CS'];

  const filteredCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeTab);

  return (
    <div style={skillsStyle.container}>
      {/* Top Badge */}
      <div style={skillsStyle.badge}>
        <span>🛠️</span>
        <span>TECHNICAL CAPABILITIES</span>
      </div>

      {/* Main Heading */}
      <h1 style={skillsStyle.heading}>
        Skills & <span style={skillsStyle.gradientText}>Technologies</span>
      </h1>

      <p style={skillsStyle.subtitle}>
        A comprehensive overview of programming languages, machine learning frameworks, full-stack stacks, cloud services, and foundational computer science disciplines.
      </p>

      {/* Category Tabs */}
      <div style={skillsStyle.tabRow}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            style={skillsStyle.tabBtn(activeTab === tab)}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'All' ? '⚡ All Categories' : tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={skillsStyle.grid}>
        {filteredCategories.map((cat, idx) => (
          <div
            key={idx}
            style={skillsStyle.card(hoveredCard === idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={skillsStyle.cardHeader}>
              <span style={skillsStyle.cardIcon}>{cat.icon}</span>
              <h3 style={skillsStyle.cardTitle}>{cat.title}</h3>
            </div>

            <p style={skillsStyle.cardDesc}>{cat.desc}</p>

            <div style={skillsStyle.skillsWrap}>
              {cat.skills.map((skill, sIdx) => {
                const uniqueKey = `${cat.category}-${skill}`;
                return (
                  <span
                    key={sIdx}
                    style={skillsStyle.skillBadge(hoveredSkill === uniqueKey)}
                    onMouseEnter={() => setHoveredSkill(uniqueKey)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span>▹</span>
                    <span>{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
