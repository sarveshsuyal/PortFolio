import React, { useState } from 'react';

const Dsa = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTopic, setHoveredTopic] = useState(null);

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
    accentYellow: '#facc15',
    accentOrange: '#fb923c',
    accentGradient: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
    shadowGlow: '0 0 25px rgba(56, 189, 248, 0.15)',
  };

  const dsaStyle = {
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
      margin: '0 0 3rem 0',
    },
    // Platforms Grid
    platformGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '1.8rem',
      marginBottom: '4rem',
    },
    platformCard: (isHovered) => ({
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
    platformHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.2rem',
    },
    platformIcon: {
      fontSize: '2rem',
    },
    platformTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: theme.textPrimary,
      margin: '0 0 0.4rem 0',
    },
    platformHandle: {
      fontSize: '0.88rem',
      color: theme.accentCyan,
      fontWeight: '600',
    },
    metricRow: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      margin: '1.2rem 0 1rem 0',
    },
    bigMetric: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: theme.textPrimary,
      lineHeight: '1',
    },
    metricSub: {
      fontSize: '0.9rem',
      color: theme.textMuted,
      fontWeight: '500',
    },
    statBarWrapper: {
      marginBottom: '1.5rem',
    },
    statBarItem: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.85rem',
      marginBottom: '5px',
      color: theme.textSecondary,
    },
    progressTrack: {
      height: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '10px',
    },
    progressFill: (width, color) => ({
      height: '100%',
      width: `${width}%`,
      backgroundColor: color,
      borderRadius: '3px',
      transition: 'width 0.8s ease',
    }),
    profileBtn: {
      textDecoration: 'none',
      backgroundColor: 'rgba(56, 189, 248, 0.1)',
      border: '1px solid rgba(56, 189, 248, 0.25)',
      color: theme.accentCyan,
      padding: '0.65rem 1.2rem',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      transition: 'all 0.25s ease',
      marginTop: 'auto',
    },
    // Topics Section
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '0.6rem',
    },
    sectionDesc: {
      fontSize: '0.95rem',
      color: theme.textMuted,
      marginBottom: '2rem',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.4rem',
      marginBottom: '3.5rem',
    },
    topicCard: (isHovered) => ({
      backgroundColor: isHovered ? theme.cardHoverBg : theme.cardBg,
      border: `1px solid ${isHovered ? theme.borderHover : theme.border}`,
      padding: '1.4rem',
      borderRadius: '12px',
      transition: 'all 0.25s ease',
      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    }),
    topicHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '0.8rem',
    },
    topicIcon: {
      fontSize: '1.4rem',
    },
    topicName: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: theme.textPrimary,
      margin: 0,
    },
    topicDesc: {
      fontSize: '0.88rem',
      color: theme.textSecondary,
      lineHeight: '1.5',
      margin: 0,
    },
    // Core Focus Card
    methodologyBox: {
      backgroundColor: 'rgba(56, 189, 248, 0.04)',
      border: `1px solid ${theme.border}`,
      borderRadius: '16px',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    methodologyTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: theme.textPrimary,
      margin: 0,
    },
    methodologyP: {
      fontSize: '0.95rem',
      lineHeight: '1.7',
      color: theme.textSecondary,
      margin: 0,
    },
  };

  const platforms = [
    {
      title: 'LeetCode (Main)',
      handle: '@SARVESHSUYAL',
      icon: '🧠',
      mainMetric: '235+',
      metricLabel: 'Problems Solved',
      stats: [
        { label: 'Easy', count: '90+', pct: 40, color: theme.accentGreen },
        { label: 'Medium', count: '125+', pct: 55, color: theme.accentYellow },
        { label: 'Hard', count: '20+', pct: 25, color: theme.accentOrange },
      ],
      link: 'https://leetcode.com/u/SARVESHSUYAL/',
    },
    {
      title: 'LeetCode (CP Contest)',
      handle: '@Sarvesh112k',
      icon: '⚡',
      mainMetric: '1400+',
      metricLabel: 'Contest Rating',
      stats: [
        { label: 'Weekly Contests', count: 'Regular', pct: 85, color: theme.accentPurple },
        { label: 'Biweekly Contests', count: 'Active', pct: 75, color: theme.accentCyan },
        { label: 'Global Ranking', count: 'Top Percentile', pct: 65, color: theme.accentGreen },
      ],
      link: 'https://leetcode.com/u/Sarvesh112k/',
    },
    {
      title: 'Codeforces',
      handle: '@SarveshSuyal',
      icon: '🎯',
      mainMetric: '1200+',
      metricLabel: 'Pupil Rating',
      stats: [
        { label: 'Div. 2 Rounds', count: 'Speed & Accuracy', pct: 70, color: theme.accentCyan },
        { label: 'Div. 3 Rounds', count: 'High Consistency', pct: 80, color: theme.accentPurple },
        { label: 'Language', count: 'C++ (Fast I/O)', pct: 95, color: theme.accentGreen },
      ],
      link: 'https://codeforces.com/profile/SarveshSuyal',
    },
  ];

  const topics = [
    {
      icon: '📊',
      name: 'Dynamic Programming',
      desc: '1D/2D memoization, knapsack variants, longest common subsequence, and state transitions.',
    },
    {
      icon: '🌳',
      name: 'Trees & Graphs',
      desc: 'BFS, DFS, Dijkstra, Tree traversals, LCA, topological sorting, and disjoint set union (DSU).',
    },
    {
      icon: '🔍',
      name: 'Binary Search & Pointers',
      desc: 'Search-space reductions, two-pointers, sliding window optimization, and monotonic stacks.',
    },
    {
      icon: '🔁',
      name: 'Backtracking & Recursion',
      desc: 'Constraint satisfaction, N-Queens, generating permutations, and puzzle solvers (e.g., Sudoku).',
    },
    {
      icon: '⚡',
      name: 'Greedy & Sorting',
      desc: 'Interval scheduling, optimal caching, custom comparator sorts, and heap priority queues.',
    },
    {
      icon: '🛡️',
      name: 'Bit Manipulation & Math',
      desc: 'Bit masking, modular arithmetic, GCD/LCM, prime sieves, and combinatorial number theory.',
    },
  ];

  return (
    <div style={dsaStyle.container}>
      {/* Top Badge */}
      <div style={dsaStyle.badge}>
        <span>⚡</span>
        <span>PROBLEM SOLVING & ALGORITHMIC RIGOR</span>
      </div>

      {/* Main Heading */}
      <h1 style={dsaStyle.heading}>
        Data Structures & <span style={dsaStyle.gradientText}>Competitive Programming</span>
      </h1>

      <p style={dsaStyle.subtitle}>
        A strong algorithmic backbone developed through daily problem-solving, rated international contests, and strict time/space complexity optimization in C++ and Python.
      </p>

      {/* Platform Cards */}
      <div style={dsaStyle.platformGrid}>
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            style={dsaStyle.platformCard(hoveredCard === idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div style={dsaStyle.platformHeader}>
                <div>
                  <h3 style={dsaStyle.platformTitle}>{platform.title}</h3>
                  <span style={dsaStyle.platformHandle}>{platform.handle}</span>
                </div>
                <span style={dsaStyle.platformIcon}>{platform.icon}</span>
              </div>

              {/* Big Metric Display */}
              <div style={dsaStyle.metricRow}>
                <span style={dsaStyle.bigMetric}>{platform.mainMetric}</span>
                <span style={dsaStyle.metricSub}>{platform.metricLabel}</span>
              </div>

              {/* Stat Progress Bars */}
              <div style={dsaStyle.statBarWrapper}>
                {platform.stats.map((s, sIdx) => (
                  <div key={sIdx}>
                    <div style={dsaStyle.statBarItem}>
                      <span>{s.label}</span>
                      <span style={{ fontWeight: '600', color: theme.textPrimary }}>{s.count}</span>
                    </div>
                    <div style={dsaStyle.progressTrack}>
                      <div style={dsaStyle.progressFill(s.pct, s.color)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              style={dsaStyle.profileBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.2)';
                e.currentTarget.style.borderColor = theme.accentCyan;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.25)';
              }}
            >
              Verify Profile & Submissions ↗
            </a>
          </div>
        ))}
      </div>

      {/* Core Topics Mastered */}
      <div>
        <h2 style={dsaStyle.sectionTitle}>Key Algorithmic Domains</h2>
        <p style={dsaStyle.sectionDesc}>
          Areas where I have implemented solutions adhering to optimal Big-O time and space constraints.
        </p>

        <div style={dsaStyle.topicsGrid}>
          {topics.map((t, idx) => (
            <div
              key={idx}
              style={dsaStyle.topicCard(hoveredTopic === idx)}
              onMouseEnter={() => setHoveredTopic(idx)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <div style={dsaStyle.topicHeader}>
                <span style={dsaStyle.topicIcon}>{t.icon}</span>
                <h4 style={dsaStyle.topicName}>{t.name}</h4>
              </div>
              <p style={dsaStyle.topicDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Problem Solving Approach / Philosophy */}
      <div style={dsaStyle.methodologyBox}>
        <h3 style={dsaStyle.methodologyTitle}>💡 Engineering & Algorithmic Mindset</h3>
        <p style={dsaStyle.methodologyP}>
          I treat competitive programming not just as puzzle-solving, but as foundational training for building low-latency, scalable software. Every problem solved focuses on recognizing pattern abstractions (sliding windows, state machines, topological cuts), writing clean defensive code with edge-case consideration, and minimizing memory overhead.
        </p>
      </div>
    </div>
  );
};

export default Dsa;
