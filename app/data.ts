// Central content for the portfolio. Edit here to update any page.

export const profile = {
  name: "Angelina Jiang",
  tagline: "cs student · ai research · software engineering",
  location: "Toronto, ON",
  email: "angelinajiang60@gmail.com",
  phone: "416-951-2328",
  github: "https://github.com/angelsanddevslol",
  githubHandle: "angelsanddevslol",
  linkedin: "https://linkedin.com/in/angelina-qihong-jiang",
  linkedinHandle: "angelina-qihong-jiang",
  resume: "/assets/resume.pdf",
};

export const education = {
  school: "University of Toronto",
  degree: "Bachelor's Degree, Computer Science",
  dates: "Sept. 2025 – May 2028",
  gpa: "3.97 / 4.00",
};

export type Job = {
  role: string;
  org: string;
  dates: string;
  location: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Artificial Intelligence Research Assistant",
    org: "The Matter Lab, University of Toronto",
    dates: "May 2026 – Present",
    location: "Toronto, ON",
    points: [
      "Built an evaluation harness to benchmark LLM code-generation agents across models and workflows, looking at token usage, latency, and code complexity to compare agent efficiency across MCP-server tool calls",
      "Scaled agentic pipelines beyond interactive-session limits by orchestrating multi-hour batch compute across HPC nodes with SLURM, enabling long-running autonomous workloads",
      "Optimized structural execution graphs in Python for the El Agente: Grafico with Prof. Alán Aspuru-Guzik",
    ],
  },
  {
    role: "Software Engineer",
    org: "Department of Computer Science, University of Toronto",
    dates: "May 2026 – Present",
    location: "Toronto, ON",
    points: [
      "Shipped feature enhancements to Courseography, an open-source website in Haskell and React, used by 250+ computer science students per month to visualize course prerequisites, program requirements, and term schedules",
      "Performed a schema migration in SQLite that refactored internal data access to improve readability",
      "Built and maintained a quality pipeline with Jest and Coveralls, achieving 59% statement coverage across 500+ automated tests on CircleCI by applying test-driven development (TDD) and expanding unit-test coverage",
    ],
  },
  {
    role: "Software Engineer",
    org: "Clean Architecture Visualizer for Education",
    dates: "May 2026 – Present",
    location: "Toronto, ON",
    points: [
      "Built features for CAVE, a program built in TypeScript, JavaScript and React, that helped 100+ users learn and practice software design principles",
      "Delivered a matching exercise end-to-end, owning the full cycle from Figma design to implementation and testing",
      "Reduced wall-clock runtime by 5.1% by adopting DevOps practices and reconfiguring GitHub Actions (CI/CD)",
    ],
  },
  {
    role: "Software Engineer",
    org: "IQBank",
    dates: "May 2026 – Present",
    location: "Toronto, ON",
    points: [
      "Built a full-stack user import feature in React.js and Node.js for an exam-preparation platform used by 300+ users",
      "Streamlined deployment and local development by containerizing the application with Docker",
      "Created REST API endpoints to fetch and display users from the PostgreSQL database using Prisma",
    ],
  },
];

export type Project = {
  name: string;
  stack: string;
  date: string;
  points: string[];
};

export const projects: Project[] = [
  {
    name: "Agentic AI Travel App",
    stack: "React Native, TypeScript, Google APIs, Gemini",
    date: "March 2026",
    points: [
      "Cross-platform mobile app that adapts travel itineraries from user energy check-ins and location context.",
      "Agentic pipeline that evaluates user state, filters nearby options via the Google Maps SDK, and recommends alternative activities with reasoning and directions.",
      "Integrated the Gemini API to generate personalized itineraries from mood and wellness data persisted in Supabase.",
    ],
  },
  {
    name: "Instrument Classification ML Model",
    stack: "pandas, NumPy, PyTorch, Google Colab, Kaggle",
    date: "Feb – April 2026",
    points: [
      "Built and trained a CNN that classifies musical instruments across 18 categories.",
      "End-to-end data pipeline that cleaned raw Kaggle .wav files and generated structured .csv metadata, split 80/20 for train/test.",
      "Improved accuracy from 56% to 96% through hyperparameter tuning and audio data augmentation on GPU-accelerated Colab.",
      "Deployed as a full-stack web app (Flask REST API + React, Dockerized on Hugging Face Spaces) accepting .wav/.mp3 uploads.",
    ],
  },
  {
    name: "Flight Inflation Detector Agent",
    stack: "Python, pandas, Matplotlib, NumPy, XGBoost",
    date: "Feb – March 2026",
    points: [
      "Built an XGBoost model at the SDSS Datathon that flags flight-fare inflation against expected pricing, reaching 91.8% accuracy on real-time fare data.",
      "Ensured statistical integrity by cleaning data with pandas/NumPy and validating with an 80/20 split and cross-validation.",
      "Communicated model insights and inflation trends through Power BI dashboards and Matplotlib visualizations.",
    ],
  },
  {
    name: "1v1 Multi-Agent RL Environment",
    stack: "PyGame, PyMunk, Stable Baselines3, PyTorch",
    date: "Oct – Nov 2025",
    points: [
      "Built an autonomous agent for a 1v1 competitive environment using PPO and Deep Q-Networks (DQN).",
      "Designed reward functions and tuned hyperparameters, evaluating performance through repeated testing.",
      "Deployed and benchmarked agents in a live tournament with 400+ participants.",
    ],
  },
  {
    name: "Outfit Creation App",
    stack: "React Native, JavaScript, Flask, MongoDB, Expo",
    date: "Aug 2025",
    points: [
      "Full-stack cross-platform mobile app that lets users assemble outfits through a browse-and-swipe interface.",
      "Designed a Flask REST API backend with user data and saved outfits persisted in MongoDB.",
      "Implemented a Playwright scraper integrated with SerpAPI's Google Image Search to surface similar clothing listings.",
    ],
  },
  {
    name: "Smile Detection Program",
    stack: "Python, OpenCV",
    date: "July 2025",
    points: [
      "Real-time photo capture program that detects faces and smiles using OpenCV and instantly saves the picture.",
      "Automatic capture-and-save system that stores detected images to the user's local file directory.",
    ],
  },
  {
    name: "AI Marketing Website",
    stack: "HTML, CSS, Flask, JavaScript",
    date: "Sept 2024",
    points: [
      "Web platform that generates marketing content from prompts using generative AI (Cohere captions, ModelsLab images).",
      "Automated posting system that publishes generated content across social platforms via the Twitter API.",
      "Designed an intuitive UI under hackathon time constraints.",
    ],
  },
  {
    name: "Exam Sharing Platform",
    stack: "React.js, Flask, Python, SQLAlchemy, Tailwind CSS",
    date: "Aug – Sept 2024",
    points: [
      "Full-stack web app that lets students upload, process, and share past exam papers.",
      "Flask backend with SQLAlchemy for secure file storage and dynamic PDF generation, paired with a responsive React frontend.",
      "Collaborated via Git/GitHub with code reviews; used UNIX tools and shell scripting.",
    ],
  },
];

export const leadership = [
  {
    role: "Academic Associate",
    org: "Computer Science Student Union @ UofT",
    dates: "Sept 2025 – May 2026",
    points: [
      "Taught peers core data structures and algorithms in Python through presentations and coding examples.",
      "Solved coding problems in real time by optimizing algorithms with problem-solving and OOP.",
      "Organized weekly LeetCode Nights for 50+ students with IEEE UofT and UTMIST.",
    ],
  },
  {
    role: "Event Organizer",
    org: "Recess Hacks Hackathon",
    dates: "April – Aug 2025",
    points: [
      "Researched, wrote, and sent outreach to monetary sponsors, judges, and vendors.",
      "Organized a 36-hour student-run hackathon with 150+ participants and $20,000+ in prizes from 13 companies.",
    ],
  },
];

export const achievements = [
  "Fermat Math Contest (2024): Top 1% among 19,000+ contestants internationally (University of Waterloo)",
  "Canadian Girls' Math Contest (2024): 3rd place, Senior Division (CGMC)",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Haskell", "SQL", "Java", "C/C++", "HTML/CSS"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "React Native", "Node.js", "Flask", "Prisma", "SQLAlchemy", "Expo"],
  },
  {
    group: "ML / AI & Data",
    items: ["PyTorch", "XGBoost", "Stable Baselines3", "OpenCV", "pandas", "NumPy", "Matplotlib", "MCP", "Power BI"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    group: "Developer Tools & DevOps",
    items: ["Docker", "Git/GitHub", "GitHub Actions (CI/CD)", "Jest", "Coveralls", "Playwright", "SLURM/HPC", "Google Colab", "Figma", "Hugging Face Spaces", "UNIX/Shell"],
  },
];
