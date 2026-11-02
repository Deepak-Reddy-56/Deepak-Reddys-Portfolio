import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PortfolioPanel, { type PortfolioPanelState } from "./PortfolioPanel";
import { PROJECTS, PROFILE } from "./portfolioData";
import "./deepos.css";

export default function Desktop() {
  const [panel, setPanel] = useState<PortfolioPanelState | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const revealTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <main className="deepos" aria-label="DeepOS interactive portfolio">
      <div className="deepos-grain" aria-hidden="true" />

      <header className="deepos-header">
        <a
          className="deepos-mark"
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Deepak Reddy on GitHub"
        >
          DR<span>.</span>
        </a>

        <div className="header-context">
          <span>SOFTWARE ENGINEERING</span>
          <i aria-hidden="true" />
          <span>{PROFILE.location.toUpperCase()}</span>
        </div>

        <nav className="deepos-nav" aria-label="Portfolio navigation">
          <button
            type="button"
            onClick={() => setPanel({ kind: "project", project: PROJECTS[0] })}
          >
            Work
          </button>
          <button type="button" onClick={() => setPanel({ kind: "profile" })}>
            Profile
          </button>
          <button type="button" onClick={() => setPanel({ kind: "contact" })}>
            Contact <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </header>

      <motion.section
        className="deepos-hero"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={revealTransition}
      >
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            SYSTEMS · SECURITY · SOFTWARE
          </p>
          <h1>
            I build the parts
            <br />
            that <em>have to work.</em>
          </h1>
          <p className="hero-description">
            I’m Deepak Reddy — a computer science student working across
            backend systems, application security and product interfaces.
          </p>
        </div>

        <SystemSketch reduceMotion={reduceMotion} />
      </motion.section>

      <section className="work-index" id="work-index" aria-labelledby="work-heading">
        <div className="index-heading">
          <div>
            <span className="index-number">01—03</span>
            <h2 id="work-heading">Selected work</h2>
          </div>
          <span className="index-note">OPEN A FILE TO EXPLORE</span>
        </div>

        <div className="project-list">
          {PROJECTS.map((project, index) => (
            <motion.button
              className="project-row"
              key={project.id}
              type="button"
              onClick={() => setPanel({ kind: "project", project })}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...revealTransition,
                delay: reduceMotion ? 0 : 0.12 + index * 0.075,
              }}
              whileHover={reduceMotion ? undefined : { x: 3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            >
              <span className="project-index">{project.index}</span>
              <span className="project-title-wrap">
                <strong>{project.title}</strong>
                <small>{project.category}</small>
              </span>
              <span className="project-summary">{project.summary}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </motion.button>
          ))}
        </div>
      </section>

      <footer className="deepos-footer">
        <span>BUILT WITH INTENTION, NOT NOISE.</span>
        <button type="button" onClick={() => setPanel({ kind: "profile" })}>
          A little more about me <span aria-hidden="true">↗</span>
        </button>
        <span>© {new Date().getFullYear()} DEEPAK REDDY</span>
      </footer>

      <PortfolioPanel panel={panel} onClose={() => setPanel(null)} />
    </main>
  );
}

function SystemSketch({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      className="system-sketch"
      role="img"
      aria-label="Abstract diagram showing connected software systems"
    >
      <div className="sketch-caption">A SYSTEM IS A SERIES OF DECISIONS</div>
      <svg viewBox="0 0 174 150" aria-hidden="true">
        <defs>
          <linearGradient id="sketch-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7ad91" />
            <stop offset="100%" stopColor="#c58b6e" />
          </linearGradient>
        </defs>
        <path className="sketch-wire" d="M29 39 H75 V74 H124" />
        <path className="sketch-wire sketch-wire-soft" d="M29 112 H75 V74" />
        <path className="sketch-wire" d="M124 74 V112 H145" />
        <rect x="9" y="20" width="40" height="38" rx="8" className="sketch-node sketch-node-one" />
        <rect x="9" y="93" width="40" height="38" rx="8" className="sketch-node sketch-node-two" />
        <rect x="103" y="54" width="44" height="40" rx="9" className="sketch-node sketch-node-main" />
        <circle cx="29" cy="39" r="4" fill="#8d987b" />
        <circle cx="29" cy="112" r="4" fill="#c58b6e" />
        <circle cx="125" cy="74" r="5" fill="url(#sketch-gradient)" />
        <circle cx="145" cy="112" r="3" fill="#8d987b" />
        <path d="M75 67 L82 74 L75 81" fill="none" stroke="#898b7e" strokeWidth="1.3" />
        <path d="M138 106 L145 112 L138 118" fill="none" stroke="#898b7e" strokeWidth="1.3" />
        {!reduceMotion && (
          <motion.circle
            cx="75"
            cy="74"
            r="3"
            fill="#c58b6e"
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
      <div className="sketch-legend">
        <span><i className="legend-dot legend-sage" /> INPUT</span>
        <span><i className="legend-dot legend-clay" /> LOGIC</span>
        <span><i className="legend-dot legend-ink" /> OUTPUT</span>
      </div>
    </div>
  );
}
