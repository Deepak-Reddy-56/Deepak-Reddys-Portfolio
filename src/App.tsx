import { useEffect, useMemo, useState } from 'react';

type Category = 'backend' | 'fullstack' | 'tools';
type Filter = 'all' | Category;

type Project = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  category: Category;
  status?: string;
  visual: string;
  visualLabel: string;
  stack: string[];
  github: string;
  live?: string;
  liveLabel?: string;
};

const projects: Project[] = [
  {
    number: '01',
    name: 'SentinelLog',
    subtitle: 'Security Log Generation & Analytics',
    description:
      'A rule-based monitoring system that analyses login activity, detects brute-force patterns, raises alerts and automatically blocks offending IP addresses.',
    category: 'backend',
    visual: 'sentinel',
    visualLabel: 'THREAT MONITOR',
    stack: ['Python', 'FastAPI', 'SQLite', 'Pandas', 'Chart.js'],
    github: 'https://github.com/Deepak-Reddy-56/SentinelLog',
  },
  {
    number: '02',
    name: 'Secure BMS',
    subtitle: 'Component Provenance on Blockchain',
    description:
      'A role-based component lifecycle platform that records manufacturing, certification, shipping and assembly events on a permissioned Hyperledger Fabric ledger.',
    category: 'fullstack',
    visual: 'bms',
    visualLabel: 'PROVENANCE LEDGER',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Fabric'],
    github: 'https://github.com/Deepak-Reddy-56/secure-bms-provenance',
    status: 'TEAM PROJECT',
  },
  {
    number: '03',
    name: 'VROOM',
    subtitle: 'Vehicle Rental Management System',
    description:
      'A backend-first rental platform with customer, staff and admin workflows, real availability checks, booking conflict protection and inspection-based settlement.',
    category: 'backend',
    visual: 'vroom',
    visualLabel: 'FLEET OPERATIONS',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/Deepak-Reddy-56/Vehicle_Rental_management',
  },
  {
    number: '04',
    name: 'LotLens',
    subtitle: 'Persistent Failure Intelligence',
    description:
      'A manufacturing investigation assistant designed to connect historical defect evidence with verified corrective actions and guide the next investigation.',
    category: 'fullstack',
    visual: 'lotlens',
    visualLabel: 'QUALITY INTELLIGENCE',
    stack: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    github: 'https://github.com/Deepak-Reddy-56/lotlens',
    status: 'IN DEVELOPMENT',
  },
  {
    number: '05',
    name: 'Phishing Shield',
    subtitle: 'Suspicious URL Detection',
    description:
      'A URL safety checker combining heuristic analysis, punycode homograph detection and trusted-domain checks to flag potentially deceptive links.',
    category: 'tools',
    visual: 'phishing',
    visualLabel: 'URL INSPECTOR',
    stack: ['JavaScript', 'Node.js', 'Express', 'VirusTotal API'],
    github: 'https://github.com/Deepak-Reddy-56/Phishing-Shield',
  },
  {
    number: '06',
    name: 'InternPilot',
    subtitle: 'Internship Discovery Assistant',
    description:
      'A mobile-friendly internship dashboard with opportunity search, filters, match scores and an application tracker that keeps status changes locally.',
    category: 'fullstack',
    visual: 'intern',
    visualLabel: 'APPLICATION TRACKER',
    stack: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    github: 'https://github.com/Deepak-Reddy-56/Automated_intern',
    status: 'MVP',
  },
  {
    number: '07',
    name: 'Clara & Co.',
    subtitle: 'E-commerce Experience',
    description:
      'A fashion storefront built with a modern Next.js stack, with a focus on clean product presentation and a polished shopping experience.',
    category: 'fullstack',
    visual: 'clara',
    visualLabel: 'ONLINE STORE',
    stack: ['Next.js', 'React', 'TypeScript'],
    github: 'https://github.com/Deepak-Reddy-56/clara-co',
    live: 'https://clara.co.in',
    liveLabel: 'LIVE SITE',
  },
  {
    number: '08',
    name: 'CampusCopilot',
    subtitle: 'Intelligent University Assistant',
    description:
      'A hackathon-built assistant that combines fuzzy matching, university data analytics, visualisations and classic DSA techniques behind a conversational interface.',
    category: 'tools',
    visual: 'campus',
    visualLabel: 'CAMPUS COMPANION',
    stack: ['Python', 'Pandas', 'DSA', 'Folium', 'Matplotlib'],
    github: 'https://github.com/Deepak-Reddy-56/campuscopilot',
  },
];

const filters: { label: string; value: Filter }[] = [
  { label: 'ALL BUILDS', value: 'all' },
  { label: 'BACKEND', value: 'backend' },
  { label: 'FULL STACK', value: 'fullstack' },
  { label: 'TOOLS & SYSTEMS', value: 'tools' },
];

function PixelAvatar() {
  return (
    <svg
      className="pixel-avatar"
      viewBox="0 0 240 250"
      role="img"
      aria-label="Pixel-art portrait"
      shapeRendering="crispEdges"
    >
      <ellipse cx="120" cy="229" rx="84" ry="9" fill="#0a0b08" />
      <path d="M49 214v-36h19v-18h104v18h19v36h13v19H36v-19z" fill="#242628" />
      <path d="M68 177v-15h20v-15h64v15h20v15h18v48H50v-48z" fill="#34383a" />
      <path d="M89 145h62v30H89z" fill="#d98c66" />
      <path d="M76 58h88v89H76z" fill="#e8a47e" />
      <path d="M61 83V48h18V30h18V18h49v12h21v18h13v37h-16V68h-12V56H91v13H78v14z" fill="#34251f" />
      <path d="M76 50h15V38h17V26h42v12h17v12h12v26h-15V64h-12V52H94v12H79v13H64V64h12z" fill="#493027" />
      <path d="M87 90h23v15H87zM132 90h23v15h-23z" fill="#fff0d9" />
      <path d="M96 94h8v10h-8zM137 94h8v10h-8z" fill="#201b1a" />
      <path d="M78 86h35v6H78zM129 86h35v6h-35zM111 91h18v6h-18z" fill="#282523" />
      <path d="M105 123h30v7h-30z" fill="#9b4d49" />
      <path d="M96 139h48v7H96z" fill="#c97968" />
      <path d="M58 193h31v31H58zM151 193h31v31h-31z" fill="#202326" />
      <path d="M38 225h164v9H38z" fill="#cfff00" />
      <path d="M27 73h12v12H27zM201 48h12v12h-12zM190 90h8v8h-8z" fill="#d8ff00" />
      <path d="M35 35h7v7h-7zM205 130h7v7h-7zM20 150h6v6h-6z" fill="#f58bce" />
    </svg>
  );
}

function VisualThumb({ project }: { project: Project }) {
  return (
    <div className={'project-visual visual--' + project.visual} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-chrome">
          <span />
          <span />
          <span />
          <i>{project.visualLabel}</i>
          <b>↗</b>
        </div>
        <div className="visual-stage">
          <div className="visual-stage-copy">
            <span className="visual-overline">PROJECT / {project.number}</span>
            <strong>{project.name}</strong>
            <small>{project.subtitle}</small>
          </div>
          <div className="visual-graphic">
            <div className="graphic-core" />
            <div className="graphic-ring graphic-ring--one" />
            <div className="graphic-ring graphic-ring--two" />
            <div className="graphic-bars"><i /><i /><i /><i /><i /></div>
          </div>
          <div className="visual-foot">
            <span>STATUS: ONLINE</span>
            <span>DR // LABS</span>
          </div>
        </div>
      </div>
      <span className="visual-corner visual-corner--one" />
      <span className="visual-corner visual-corner--two" />
    </div>
  );
}

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>;
}

export default function App() {
  const [filter, setFilter] = useState<Filter>('all');
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === 'all' || project.category === filter),
    [filter],
  );

  useEffect(() => {
    document.title = 'Deepak Reddy — Software Developer';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="scroll-track" aria-hidden="true"><span /></div>

      <aside className="side-rail" aria-label="Section navigation">
        <span className="rail-label">SCROLL TO EXPLORE</span>
        <a href="#home" aria-label="Home" className="rail-dot rail-dot--active">01</a>
        <a href="#about" aria-label="About" className="rail-dot">02</a>
        <a href="#work" aria-label="Projects" className="rail-dot">03</a>
        <a href="#contact" aria-label="Contact" className="rail-dot">04</a>
        <span className="rail-line" />
      </aside>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Deepak Reddy home">
          <span className="brand-mark">DR<span>.</span></span>
          <span className="brand-copy">DEEPAK REDDY<small>DEVELOPER PORTFOLIO</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">PROJECTS</a>
          <a href="#stack">STACK</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a className="header-availability" href="mailto:deepak.reddy@btech.christuniversity.in">
          <span className="availability-dot" /> OPEN TO OPPORTUNITIES
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark">✳</span> HELLO WORLD — I'M DEEPAK</div>
            <h1>
              I BUILD
              <span>THINGS THAT</span>
              <em>WORK.</em>
            </h1>
            <p className="hero-lede">
              Computer science student. Backend-focused developer. I turn messy problems into
              dependable software — one thoughtful build at a time.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">EXPLORE MY WORK <ArrowIcon /></a>
              <a className="button button--quiet" href="mailto:deepak.reddy@btech.christuniversity.in">LET'S TALK <span>↘</span></a>
            </div>
            <div className="hero-footnote">
              <span className="tiny-square" /> BASED IN BENGALURU, INDIA
              <span className="hero-footnote-separator">/</span>
              BUILDING FOR THE REAL WORLD
            </div>
          </div>

          <div className="hero-art">
            <div className="art-orbit art-orbit--one" />
            <div className="art-orbit art-orbit--two" />
            <div className="art-cross art-cross--one">+</div>
            <div className="art-cross art-cross--two">+</div>
            <div className="art-frame">
              <div className="art-frame-top">
                <span>PLAYER PROFILE // 001</span>
                <span className="art-live"><i /> ONLINE</span>
              </div>
              <div className="avatar-stage"><PixelAvatar /></div>
              <div className="art-caption">
                <div><span>PLAYER NAME</span><strong>DEEPAK R.</strong></div>
                <div><span>CLASS</span><strong>BUILDER</strong></div>
                <div><span>MAIN QUEST</span><strong>SHIP GOOD SOFTWARE</strong></div>
              </div>
              <div className="art-frame-bottom"><span>XP 09.75 / 10</span><span>LVL. 02 — CS</span></div>
            </div>
            <div className="floating-chip floating-chip--top">{"<"} CODE / BUILD / REPEAT {"/>"}</div>
            <div className="floating-chip floating-chip--bottom"><span>✦</span> CURRENTLY LEARNING DSA</div>
            <span className="art-coordinate">12°58' N / 77°35' E</span>
          </div>

          <a href="#about" className="scroll-cue"><span className="scroll-cue-line" /> SCROLL TO DISCOVER</a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>SOFTWARE ENGINEERING</span><b>✳</b><span>BACKEND SYSTEMS</span><b>✳</b><span>PRODUCT THINKING</span><b>✳</b><span>SOFTWARE ENGINEERING</span><b>✳</b><span>BACKEND SYSTEMS</span><b>✳</b><span>PRODUCT THINKING</span><b>✳</b>
          </div>
        </div>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="section-kicker" data-reveal><span>01 / THE HUMAN BEHIND THE CODE</span><span className="kicker-line" /></div>
          <div className="about-grid">
            <div className="about-heading" data-reveal>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Curious by<br />default. <span>Builder</span><br />by choice.</h2>
              <p className="about-summary">
                I enjoy understanding how things work under the hood — from APIs and databases
                to the small details that make a product feel right.
              </p>
            </div>
            <div className="about-console" data-reveal>
              <div className="console-top"><span><i /> ABOUT.TXT</span><span>READ ONLY</span></div>
              <div className="console-body">
                <p><b>01</b><span className="console-prompt">const</span> developer = {'{'}</p>
                <p className="console-indent"><span>name</span>: <strong>'Deepak Reddy'</strong>,</p>
                <p className="console-indent"><span>focus</span>: <strong>'Backend & full-stack'</strong>,</p>
                <p className="console-indent"><span>education</span>: <strong>'B.Tech Computer Science'</strong>,</p>
                <p className="console-indent"><span>grad</span>: <strong>'2028'</strong>,</p>
                <p className="console-indent"><span>mindset</span>: <strong>'Learn. Build. Improve.'</strong></p>
                <p><b>08</b>{'}'};</p>
                <div className="console-note"><span className="console-cursor" /> CURRENTLY LOOKING FOR OPPORTUNITIES TO LEARN, CONTRIBUTE & SHIP.</div>
              </div>
              <div className="console-stats">
                <div><strong>9.75</strong><span>CGPA / 10</span></div>
                <div><strong>08<span>+</span></strong><span>SELECTED BUILDS</span></div>
                <div><strong>2028</strong><span>GRADUATION</span></div>
              </div>
            </div>
          </div>

          <div className="journey-row" data-reveal>
            <div className="journey-intro"><span className="eyebrow">THE JOURNEY SO FAR</span><p>A few milestones that shaped the way I build.</p></div>
            <div className="journey-item">
              <span className="journey-year">2026 / APR — MAY</span>
              <strong>Samsung Innovation Campus</strong>
              <p>Completed a 30-day internship programme focused on applied technology and hands-on learning.</p>
            </div>
            <div className="journey-item">
              <span className="journey-year">2026 / SEP — OCT</span>
              <strong>Cisco AI Workshop</strong>
              <p>Explored AI-assisted network workflows, GPU architecture and enterprise networking systems.</p>
            </div>
            <div className="journey-item">
              <span className="journey-year">2024 — 2028</span>
              <strong>CHRIST University</strong>
              <p>B.Tech in Computer Science, Bengaluru. Learning by building and shipping projects.</p>
            </div>
          </div>
        </section>

        <section className="work-section section-wrap section-pad" id="work">
          <div className="section-kicker" data-reveal><span>02 / SELECTED WORK</span><span className="kicker-line" /></div>
          <div className="work-heading" data-reveal>
            <div><p className="eyebrow">A COLLECTION OF BUILDS</p><h2>Ideas into<br /><span>working things.</span></h2></div>
            <p>Small experiments, practical systems and collaborative builds. Each one taught me something new about engineering.</p>
          </div>
          <div className="work-toolbar" data-reveal>
            <div className="filter-list" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  className={filter === item.value ? 'filter-button is-active' : 'filter-button'}
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  type="button"
                  aria-pressed={filter === item.value}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a className="all-github" href="https://github.com/Deepak-Reddy-56?tab=repositories" target="_blank" rel="noreferrer">
              ALL REPOSITORIES <ArrowIcon />
            </a>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.number} data-reveal>
                <VisualThumb project={project} />
                <div className="project-card-content">
                  <div className="project-meta">
                    <span>PROJECT / {project.number}</span>
                    {project.status && <span className="project-status">{project.status}</span>}
                  </div>
                  <h3>{project.name}<span>.</span></h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">SOURCE CODE <ArrowIcon /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || 'LIVE DEMO'} <ArrowIcon /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="work-bottom-note" data-reveal><span>✳</span> MORE EXPERIMENTS, COMMITS & LEARNING ON GITHUB</div>
        </section>

        <section className="stack-section section-wrap section-pad" id="stack">
          <div className="section-kicker" data-reveal><span>03 / TOOLS OF THE TRADE</span><span className="kicker-line" /></div>
          <div className="stack-grid">
            <div className="stack-intro" data-reveal>
              <p className="eyebrow">MY CURRENT TOOLBOX</p>
              <h2>Good tools.<br /><span>Better thinking.</span></h2>
              <p>I choose tools based on the problem. These are the technologies I’ve been learning and using across my projects.</p>
            </div>
            <div className="stack-panels" data-reveal>
              <div className="stack-panel">
                <div className="stack-panel-head"><span>01</span><strong>LANGUAGES</strong></div>
                <div className="stack-pills"><span>C++</span><span>Python</span><span>Java</span><span>JavaScript</span><span>TypeScript</span><span>SQL</span></div>
              </div>
              <div className="stack-panel">
                <div className="stack-panel-head"><span>02</span><strong>BACKEND & DATA</strong></div>
                <div className="stack-pills"><span>Node.js</span><span>Express</span><span>FastAPI</span><span>MongoDB</span><span>SQLite</span><span>REST APIs</span></div>
              </div>
              <div className="stack-panel">
                <div className="stack-panel-head"><span>03</span><strong>FRONTEND & DEV TOOLS</strong></div>
                <div className="stack-pills"><span>React</span><span>HTML / CSS</span><span>Tailwind</span><span>Git</span><span>GitHub</span><span>Vercel</span><span>Figma</span></div>
              </div>
              <div className="stack-panel">
                <div className="stack-panel-head"><span>04</span><strong>PLATFORMS & CONCEPTS</strong></div>
                <div className="stack-pills"><span>Hyperledger Fabric</span><span>Docker</span><span>Linux</span><span>DSA</span><span>Networking</span><span>Authentication</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap section-pad" id="contact">
          <div className="contact-panel" data-reveal>
            <div className="contact-spark contact-spark--one">✳</div>
            <div className="contact-spark contact-spark--two">+</div>
            <p className="eyebrow">04 / YOUR TURN</p>
            <h2>Have a good<br />problem? <span>Let's build.</span></h2>
            <p className="contact-copy">I'm always up for conversations about software, internships, interesting problems and projects worth building.</p>
            <div className="contact-actions">
              <a className="button button--primary" href="mailto:deepak.reddy@btech.christuniversity.in">SAY HELLO <ArrowIcon /></a>
              <a className="button button--quiet" href="https://github.com/Deepak-Reddy-56" target="_blank" rel="noreferrer">GITHUB PROFILE <ArrowIcon /></a>
            </div>
            <div className="contact-email">deepak.reddy@btech.christuniversity.in</div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">DR<span>.</span></a>
        <span>DESIGNED & BUILT WITH INTENTION.</span>
        <span>© {new Date().getFullYear()} DEEPAK REDDY</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
