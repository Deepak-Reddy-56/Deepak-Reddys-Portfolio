import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PROFILE, type PortfolioProject } from "./portfolioData";

export type PortfolioPanelState =
  | { kind: "project"; project: PortfolioProject }
  | { kind: "profile" }
  | { kind: "contact" };

interface PortfolioPanelProps {
  panel: PortfolioPanelState | null;
  onClose: () => void;
}

export default function PortfolioPanel({
  panel,
  onClose,
}: PortfolioPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!panel) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [panel, onClose]);

  const duration = reduceMotion ? 0 : 0.24;

  return (
    <AnimatePresence>
      {panel && (
        <motion.div
          className="deepos-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.section
            className="deepos-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="deepos-panel-title"
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="panel-topbar">
              <span>
                {panel.kind === "project"
                  ? `PROJECT FILE / ${panel.project.index}`
                  : panel.kind === "profile"
                    ? "PROFILE / NOTES"
                    : "CONTACT / OPEN CHANNEL"}
              </span>
              <button
                ref={closeButtonRef}
                className="panel-close"
                type="button"
                onClick={onClose}
                aria-label="Close panel"
              >
                <span>Close</span>
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {panel.kind === "project" && (
              <ProjectContent project={panel.project} />
            )}

            {panel.kind === "profile" && <ProfileContent />}

            {panel.kind === "contact" && <ContactContent />}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectContent({ project }: { project: PortfolioProject }) {
  return (
    <div className="panel-content">
      <div className="panel-heading">
        <p className="eyebrow">{project.category}</p>
        <h2 id="deepos-panel-title">{project.title}</h2>
        <p className="panel-lede">{project.summary}</p>
      </div>

      <div className="project-detail-grid">
        <section>
          <p className="detail-label">01 / CONTEXT</p>
          <p>{project.context}</p>
        </section>
        <section>
          <p className="detail-label">02 / APPROACH</p>
          <p>{project.approach}</p>
        </section>
        <section className="engineering-note">
          <p className="detail-label">ENGINEERING NOTE</p>
          <p>{project.engineeringNote}</p>
        </section>
      </div>

      <div className="panel-bottom">
        <div className="stack-list" aria-label="Technology stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a
          className="text-link"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          Repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="panel-content">
      <div className="panel-heading">
        <p className="eyebrow">{PROFILE.location}</p>
        <h2 id="deepos-panel-title">
          The person behind
          <br />
          <em>the systems.</em>
        </h2>
        <p className="panel-lede">{PROFILE.introduction}</p>
      </div>

      <div className="profile-meta">
        <div>
          <p className="detail-label">EDUCATION</p>
          <strong>{PROFILE.education}</strong>
          <span>{PROFILE.university}</span>
          <span>{PROFILE.graduation}</span>
        </div>
        <div>
          <p className="detail-label">AREAS OF INTEREST</p>
          <div className="focus-list">
            {PROFILE.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-skills">
        <p className="detail-label">TOOLS I WORK WITH</p>
        {PROFILE.skills.map((skill) => (
          <div className="skill-line" key={skill.label}>
            <span>{skill.label}</span>
            <strong>{skill.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="panel-content contact-content">
      <p className="eyebrow">A GOOD PLACE TO START</p>
      <h2 id="deepos-panel-title">
        Bring a real
        <br />
        <em>problem.</em>
      </h2>
      <p className="panel-lede">
        I’m interested in thoughtful engineering work, useful products and
        conversations with people who care about the details.
      </p>
      <a
        className="contact-link"
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
      >
        <span>Find me on GitHub</span>
        <span aria-hidden="true">↗</span>
      </a>
      <p className="contact-footnote">
        GitHub is the verified public contact route listed here. Direct email
        and LinkedIn can be added once their preferred public links are confirmed.
      </p>
    </div>
  );
}
