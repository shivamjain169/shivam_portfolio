export const experience = [
  {
    company: 'Genzeon',
    position: 'Software Engineer',
    duration: 'May 2023 – Present',
    location: 'Remote',
    logo: '/logos/genzeon.png', // Add company logo to public/logos folder
    achievements: [
      {
        category: 'Real-Time & Performance',
        items: [
          'Built WebSocket pipelines with FastAPI + React for live updates',
          'Implemented parallel processing reducing CPU workloads by 35–40%',
          'Optimized database queries with indexing and tuning (up to 50% faster)',
          'Created in-memory caching with TTL and invalidation strategies'
        ]
      },
      {
        category: 'Architecture & Modernization',
        items: [
          'Designed microservices for file processing, extraction, and metadata management',
          'Refactored to micro-frontend architecture (+30% performance)',
          'Built Backend-for-Frontend layers for payload optimization',
          'Migrated legacy .NET systems to Flask + PostgreSQL'
        ]
      },
      {
        category: 'UI/UX & Design Systems',
        items: [
          'Implemented MUI theming with Figma-perfect components',
          'Reduced redundant CSS by 40%',
          'Improved user retention by 32% through better UX',
          'Developed HIP-One platform features: Medical Review, CCDA Summarization, Chat with PDF'
        ]
      },
      {
        category: 'Operations & Observability',
        items: [
          'Created observability dashboards with charts and metrics visualization',
          'Packaged applications as RPMs for Red Hat VMs',
          'Deployed and monitored on Azure environments',
          'Integrated Umami analytics for event tracking',
          'Automated workflows with Bash: cron jobs, SSH multiplexing, log rotation',
          'Managed GitFlow across 4+ modules'
        ]
      }
    ]
  }
];

export const education = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'CDAC ACTS Pune',
    duration: 'Sep 2022 – Mar 2023',
    grade: '77.85%',
    description: 'Intensive program covering full-stack development, data structures, algorithms, and software engineering practices'
  },
  {
    degree: 'B.Tech in Mechanical Engineering',
    institution: 'Engineering College',
    duration: 'May 2018 – May 2022',
    grade: '88.90%',
    description: 'Strong foundation in analytical thinking and problem-solving'
  }
];

export const certifications = [
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    date: '2023',
    logo: '/logos/azure.png' // Add certification logos to public/logos folder
  },
  {
    name: 'Microsoft Data Fundamentals',
    issuer: 'Microsoft',
    code: 'DP-900',
    date: '2023',
    logo: '/logos/azure.png'
  }
];

export const achievements = [
  {
    title: 'Catalyst Award Winner',
    organization: 'Gen-Z-verse',
    description: 'Recognized for outstanding contribution and innovation',
    icon: 'Trophy'
  },
  {
    title: 'Gen-Z-verse Hackathon Winner',
    organization: 'Genzeon',
    description: 'Won with LLM-Powered Observability Suite for intelligent log analysis',
    icon: 'Award'
  },
  {
    title: 'Genzeon Internal Hackathon Runner-up',
    organization: 'Genzeon',
    description: 'Second place in company-wide innovation competition',
    icon: 'Medal'
  },
  {
    title: 'National Means Cum Merit Scholarship Winner',
    organization: 'Government of India',
    description: 'Merit-based national scholarship',
    icon: 'GraduationCap'
  },
  {
    title: 'National Go-kart Championship Winner',
    organization: 'Bhopal Championship',
    description: 'First place in national racing competition',
    icon: 'Flag'
  }
];
