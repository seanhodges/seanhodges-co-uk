export const profile = {
  name: "Sean Hodges",
  title: "Senior Engineering Lead",
  socials: {
    linkedin: "https://www.linkedin.com/in/sean-hodges",
    github: "https://github.com/seanhodges",
  },
};

export const skills = {
  languages: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "C++"],
  frameworks: ["Spring Boot", "Node.js", "Express", "React", "Microservices"],
  tools: ["Large Language Models (LLMs)", "AI-Assisted Coding", "Vector Databases", "Python (google-generativeai)"],
  platforms: ["AWS", "Google Cloud Platform (GCP)", "Kubernetes", "Microservices", "Cloudflare"],

};

export const experience = [
  {
    role: "Senior Engineering Lead for Wise Platform",
    company: "Wise PLC (formally TransferWise)",
    location: "Shoreditch, London",
    dates: "2019 - Present",
    duties: [
      "Spearheaded the architectural design and technical strategy for the API integration platform, focusing on building scalable, resilient, and maintainable B2B2B / B2B2C international payments solutions for banks, financial businesses and other large businesses.",
      "Launched key partnerships including Morgan Stanley, Google, Nubank, Xero and Emburse.",
      "Designed the API standards, product roadmap, and security strategies that supported these deals.",
      "Mentored, coached, and led several integration platform teams in the UK and Estonia, fostering a culture of technical excellence, continuous improvement, and product ownership.",
      "Championed the adoption of AI-assisted coding tools and modern development practices, measurably improving team velocity and code quality.",
      "Drove key technical decisions in evolving the platform's microservices architecture, leveraging Kafka for robust, asynchronous event-driven communication between services."
    ],
  },
  {
    role: "Engineering Lead for Wise Business",
    company: "Wise PLC (formally TransferWise)",
    location: "Shoreditch, London",
    dates: "2016 - 2019",
    duties: [
      "Scaled the Business team from 4 engineers and 1 product manager to a 'Business Tribe' comprising 14 engineers in two international offices.",
      "Served as the principal architect for the multi-user access feature, a critical component for Wise's successful entry into the B2B international payment market.",
      "Co-developed the Batch Payments product, a high-volume, bulk payment solution processing millions of pounds in payments for hundreds of businesses monthly.",
      "Operated in a highly autonomous team, collaborating directly with product managers, designers, and customers to define strategy and execute against key performance indicators (KPIs)."
    ],
  },
  {
    role: "Engineering Lead",
    company: "Miles 33 (Cross-media advertising)",
    location: "Bracknell, Berkshire",
    dates: "2012 - 2016",
    duties: [
      "Led the greenfield development of a new cross-media advertising product (EasyBuild) for corporate agencies using a Node.js and Angular2 stack.",
      "Implemented a scriptable HTML creative building engine to automate digital ad creation.",
      "Advocated and implemented Kanban, Continuous Delivery (CD), and improved testing practices, enhancing team agility and product quality."
    ],
  },
  {
    role: "Software Engineer",
    company: "New Scientist magazine (Publishing)",
    location: "Holborn, London",
    dates: "2010 - 2012",
    duties: [
      "Developed and maintained the website's user registration and content paywall system.",
      "Introduced an automated testing environment using Jenkins CI, significantly improving release stability.",
      "Migrated the critical Digital Asset Management (DAM) system from MySQL to MongoDB."
    ],
  },
  {
    role: "Software Engineer",
    company: "Wave2 Media Solutions (Digital Publishing)",
    location: "Aylesbury, Buckinghamshire",
    dates: "2006 - 2010",
    duties: [
      "Served as the lead architect of the 'AdPortal' and 'MarketPlace' self-service advertising products.",
      "Developed a classified ad search feature using Hibernate and Lucene."
    ],
  }
];

export const projects = [
  {
    title: "Wise Platform API Integration",
    image: "assets/wise-api.png",
    challenge: "Build a scalable, resilient B2B2B/B2B2C international payments platform that could support major enterprise partnerships and handle millions of transactions.",
    role: "As Senior Engineering Lead, I spearheaded the architectural design, led distributed teams across UK and Estonia, and drove technical strategy for microservices evolution using Kafka for event-driven communication.",
    outcome: "Successfully launched partnerships with Morgan Stanley, Google, Nubank, Xero and Emburse, while improving team velocity through AI-assisted coding tools and modern development practices.",
    liveUrl: "https://wise.com/platform",
    repoUrl: "#",
  },
  {
    title: "Wise Business Multi-User Access & Batch Payments",
    image: "assets/wise-bp.png",
    challenge: "Scale the business team and develop critical B2B features including multi-user access and high-volume bulk payment processing for enterprise clients.",
    role: "As Engineering Lead, I scaled the team from 4 to 14 engineers, architected the multi-user access feature, and co-developed the Batch Payments product processing millions of pounds monthly.",
    outcome: "Enabled Wise's successful entry into the B2B international payment market and created a platform processing hundreds of business payments monthly worth millions of pounds.",
    liveUrl: "https://wise.com/business",
    repoUrl: "#",
  },
  {
    title: "EasyBuild Cross-Media Advertising Platform",
    image: "assets/wav2-eb.png",
    challenge: "Create a new cross-media advertising product for corporate agencies with automated digital ad creation capabilities.",
    role: "Led the greenfield development using Node.js and Angular2 stack, implemented a scriptable HTML creative building engine, and introduced Kanban and Continuous Delivery practices.",
    outcome: "Delivered a successful product that automated digital ad creation for corporate agencies, improving team agility and product quality through modern development practices.",
    liveUrl: "#",
    repoUrl: "#",
  }
];

export const interests = [
  { 
    name: "Home Automation", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21v-4a2 2 0 012-2h2a2 2 0 012 2v4"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9h6"></path>
    </svg>` 
  },
  { 
    name: "Sailing", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
    </svg>` 
  },
  { 
    name: "Retro Gaming", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>` 
  },
];