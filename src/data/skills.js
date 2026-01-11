export const skills = {
  backend: {
    title: 'Backend',
    items: [
      { name: 'FastAPI', level: 'expert' },
      { name: 'Flask', level: 'expert' },
      { name: 'Python', level: 'expert' },
      { name: 'Celery', level: 'advanced' },
      { name: 'SQLAlchemy', level: 'advanced' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'WebSockets', level: 'advanced' },
      { name: 'Microservices', level: 'advanced' }
    ]
  },
  frontend: {
    title: 'Frontend',
    items: [
      { name: 'React', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'Vue', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Material-UI', level: 'advanced' },
      { name: 'Webpack', level: 'advanced' },
      { name: 'Micro-frontends', level: 'advanced' },
      { name: 'Framer Motion', level: 'advanced' }
    ]
  },
  database: {
    title: 'Data & Cache',
    items: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'Redis', level: 'advanced' },
      { name: 'Database Optimization', level: 'advanced' }
    ]
  },
  devops: {
    title: 'DevOps & Observability',
    items: [
      { name: 'Azure', level: 'intermediate' },
      { name: 'Linux/RHEL', level: 'advanced' },
      { name: 'CI/CD', level: 'intermediate' },
      { name: 'Prometheus', level: 'intermediate' },
      { name: 'Grafana', level: 'intermediate' },
      { name: 'Loki', level: 'intermediate' },
      { name: 'Jaeger', level: 'intermediate' },
      { name: 'Docker', level: 'intermediate' }
    ]
  },
  orchestration: {
    title: 'Orchestration & Tools',
    items: [
      { name: 'Apache Airflow', level: 'intermediate' },
      { name: 'ETCD', level: 'intermediate' },
      { name: 'Git/GitFlow', level: 'expert' },
      { name: 'Bash Scripting', level: 'advanced' }
    ]
  },
  ai: {
    title: 'AI & ML',
    items: [
      { name: 'LLM Integration', level: 'intermediate' },
      { name: 'OCR', level: 'intermediate' },
      { name: 'Generative AI', level: 'intermediate' },
      { name: 'GitHub Copilot', level: 'advanced' },
      { name: 'AI-Assisted Development', level: 'advanced' }
    ]
  }
};

// Flat array of all skills for easy filtering/searching
export const allSkills = Object.values(skills).flatMap(category =>
  category.items.map(skill => ({
    ...skill,
    category: category.title
  }))
);
