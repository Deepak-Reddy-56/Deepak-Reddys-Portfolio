export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  approach: string;
  engineeringNote: string;
  stack: string[];
  repository: string;
}

export const PROJECTS: PortfolioProject[] = [
  {
    id: "bms-provenance",
    index: "01",
    title: "Secure BMS Provenance",
    category: "Permissioned systems",
    summary:
      "A component lifecycle that can be followed from manufacture to assembly.",
    context:
      "A component changes hands across manufacturers, certifiers, transporters, warehouses and assemblers. Its history needs to remain consistent and independently auditable.",
    approach:
      "The application gives each operational role a focused workflow while Hyperledger Fabric records lifecycle transactions. MongoDB stores application-side users, sessions and configuration; the ledger remains the source for component provenance.",
    engineeringNote:
      "The interesting boundary is deciding what belongs in the operational database, what belongs on the ledger, and which identity is allowed to move a component to its next state.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "Hyperledger Fabric",
      "JavaScript chaincode",
    ],
    repository: "https://github.com/Deepak-Reddy-56/secure-bms-provenance",
  },
  {
    id: "sentinellog",
    index: "02",
    title: "SentinelLog",
    category: "Security engineering",
    summary:
      "A rule-based monitor that turns suspicious login activity into an action.",
    context:
      "Repeated failed logins and unusually frequent attempts are easy to overlook when they are scattered across raw logs.",
    approach:
      "SentinelLog records structured login events, applies brute-force and high-frequency detection rules, blocks offending IP addresses, and exposes activity through an administrative dashboard.",
    engineeringNote:
      "Detection thresholds are explicit and testable: the project documents repeated failures within a five-minute window and high-frequency attempts within a one-minute window.",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Pandas",
      "Pydantic",
      "Chart.js",
    ],
    repository: "https://github.com/Deepak-Reddy-56/SentinelLog",
  },
  {
    id: "campuscopilot",
    index: "03",
    title: "CampusCopilot",
    category: "Data & algorithms",
    summary:
      "A university assistant built around campus data, fuzzy matching and classical algorithms.",
    context:
      "Students often need small pieces of information—events, schedules, fees or campus locations—without knowing where each dataset lives.",
    approach:
      "A command-oriented interface routes queries to Python data operations and visualisations. Fuzzy matching helps resolve imperfect input, while dedicated algorithms handle event selection and lookup tasks.",
    engineeringNote:
      "The project uses Levenshtein distance, activity selection, binary search and hash-table lookup as explicit parts of the solution rather than hiding the logic behind a black box.",
    stack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Folium",
      "Dynamic programming",
      "Greedy algorithms",
    ],
    repository: "https://github.com/Deepak-Reddy-56/campuscopilot",
  },
];

export const PROFILE = {
  name: "Deepak Reddy",
  location: "Bengaluru, India",
  headline: "Computer Science undergraduate",
  education: "B.Tech, Computer Science",
  university: "CHRIST (Deemed to be University)",
  graduation: "Expected 2028",
  introduction:
    "I like tracing a problem all the way through: from the request, to the data, to the point where a system has to make a decision.",
  focus: [
    "Backend engineering",
    "Application security",
    "Reliable system design",
    "Product interfaces",
  ],
  skills: [
    {
      label: "Languages",
      value: "C · C++ · Python · Java · JavaScript",
    },
    {
      label: "Backend",
      value: "Node.js · Express · FastAPI",
    },
    {
      label: "Data & systems",
      value: "MongoDB · SQLite · Hyperledger Fabric",
    },
    {
      label: "Frontend",
      value: "React · TypeScript · Tailwind CSS",
    },
    {
      label: "Tools",
      value: "Git · GitHub · Docker · Vercel",
    },
  ],
  github: "https://github.com/Deepak-Reddy-56",
} as const;
