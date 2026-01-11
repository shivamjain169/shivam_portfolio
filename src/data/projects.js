export const projects = [
  {
    id: 'org-chart-react',
    title: 'org-chart-react',
    subtitle: 'NPM Library',
    description: 'Customizable React library for organizational charts with drag-and-drop navigation and flexible component structure',
    problem: 'Need for flexible organizational chart components in React applications',
    solution: 'Built a highly customizable React library with intuitive API, drag-and-drop support, and responsive design',
    tech: ['React', 'TypeScript', 'Webpack', 'NPM'],
    outcome: 'Published on NPM with active downloads and positive community feedback',
    image: '/projects/org-chart.png', // Add project images to public/projects folder
    links: {
      npm: 'https://www.npmjs.com/package/org-chart-react',
      github: 'hhttps://github.com/shivamjain169/org-chart-react',
      demo: 'https://shivamjain169.github.io/org-chart-react/'
    },
    featured: true,
    category: ['Frontend', 'Library']
  },
  {
    id: 'llm-observability',
    title: 'LLM-Powered Observability Suite',
    subtitle: 'Hackathon Winner',
    description: 'Multi-agent system for intelligent log analysis and root cause analysis using LLMs, reducing MTTD and MTTR',
    problem: 'Overwhelming telemetry data without context makes troubleshooting time-consuming',
    solution: 'Built an intelligent system that analyzes logs, metrics, and traces to provide contextual alerts with actionable summaries and automated root cause analysis',
    tech: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Loki', 'Jaeger', 'LLM', 'Python'],
    outcome: 'Won Gen-Z-verse Hackathon - Automated contextual alerts reducing incident response time',
    image: '/projects/observability.png',
    links: {},
    featured: true,
    category: ['Backend', 'AI', 'DevOps']
  },
  {
    id: 'animation-library',
    title: 'Animation Component Library',
    subtitle: 'Design System',
    description: 'Gallery of reusable CSS and React animations with copy-to-clipboard functionality for rapid prototyping',
    problem: 'Developers need quick access to reusable loading animations for web projects',
    solution: 'Created a comprehensive gallery of animations with one-click copy functionality and live previews',
    tech: ['React', 'Tailwind CSS', 'Material-UI', 'Framer Motion'],
    outcome: 'Accelerated development workflow and improved design consistency across projects',
    image: '/projects/animations.png',
    links: {
      demo: 'https://animoload.netlify.app/',
      github: 'https://github.com/shivamjaingenzeon/AnimationWebsite'
    },
    featured: true,
    category: ['Frontend', 'Design']
  },
  // {
  //   id: 'websocket-pipeline',
  //   title: 'Real-Time WebSocket Pipeline',
  //   subtitle: 'Enterprise Application',
  //   description: 'High-performance WebSocket infrastructure for real-time data streaming in healthcare applications',
  //   problem: 'Need for instant data updates in medical review workflows without page refreshes',
  //   solution: 'Designed and implemented scalable WebSocket pipeline with FastAPI backend and React frontend, handling concurrent connections efficiently',
  //   tech: ['FastAPI', 'WebSockets', 'React', 'Redis', 'PostgreSQL'],
  //   outcome: 'Enabled real-time collaboration features, improving workflow efficiency by 40%',
  //   image: '/projects/websocket.png',
  //   links: {
  //     caseStudy: '/projects/websocket-pipeline'
  //   },
  //   featured: false,
  //   category: ['Backend', 'Real-time']
  // },
  // {
  //   id: 'microservices-platform',
  //   title: 'Microservices Architecture Migration',
  //   subtitle: 'System Design',
  //   description: 'Designed and implemented microservices architecture for file processing and metadata management',
  //   problem: 'Monolithic architecture causing scalability issues and deployment bottlenecks',
  //   solution: 'Broke down monolith into focused microservices with clear boundaries, implemented BFF pattern for optimized payloads',
  //   tech: ['Flask', 'FastAPI', 'PostgreSQL', 'Azure', 'Docker'],
  //   outcome: 'Improved deployment frequency by 3x, reduced system coupling, enabled independent scaling',
  //   image: '/projects/microservices.png',
  //   links: {},
  //   featured: false,
  //   category: ['Backend', 'Architecture']
  // }
];

export const projectCategories = [
  'All',
  'Frontend',
  'Backend',
  'Real-time',
  'AI',
  'DevOps',
  'Design',
  'Library',
  'Architecture'
];
