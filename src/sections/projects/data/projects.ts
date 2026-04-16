import { Project } from '../types/Project'

export const PROJECTS: Project[] = [
  {
    id: 'kpi-sports-car',
    title: 'KPI Management System for Automotive Production',
    description:
      'Led frontend development of a production KPI platform for a premium automotive manufacturer. Aggregates live manufacturing data and visualizes historical trends, cutting down error detection time and streamlining milestone planning across vehicle models.',
    technologies: ['TypeScript', 'React', 'SCSS', 'AWS']
  },
  {
    id: 'office-dashboard',
    title: 'Internal Office Dashboard',
    description:
      'Led a team of 3 to build an office management dashboard used across multiple locations. Runs on a single-board computer with built-in OTA updates, no manual deployments needed.',
    technologies: ['TypeScript', 'React', 'Tailwind', 'NodeJS', 'PostgreSQL']
  },
  {
    id: 'smart-city-dashboard',
    title: 'Smart City Dashboard for Real-Time Information',
    description:
      'Built a public-facing smart city dashboard for a municipality in North Rhine-Westphalia, giving citizens live visibility into parking availability and weather. Pulls from multiple data sources via cloud and adapts to different viewing contexts.',
    technologies: [
      'TypeScript',
      'React',
      'Tailwind',
      'Docker',
      'PostgreSQL',
      'Serverless Functions'
    ]
  },
  {
    id: 'price-estimator',
    title: 'Web-Based Price Estimator for Pipe Manufacturer',
    description:
      "Embedded a dynamic price estimator into a pipe manufacturer's existing website, letting customers get instant order estimates through a guided questionnaire and reducing friction in the inquiry process.",
    technologies: ['TypeScript', 'React', 'Tailwind', 'Docker']
  },
  {
    id: 'ad-templating',
    title: 'Ad Templating Integration for Efficient Web Advertising',
    description:
      'Standardized ad delivery for a media client by building a reusable templating system for various ad formats including surveys. Fully integrated with Typo3 and backed by a lightweight component library to eliminate repeated implementations.',
    technologies: ['TypeScript', 'Svelte', 'Typo3', 'TypoScript']
  },
  {
    id: 'glass-fault-detection',
    title: 'Glass Manufacturing Fault Detection and Optimization',
    description:
      'Tackled early fault detection in glass production by centralizing data from disparate systems into three role-specific dashboards and a web application, giving different teams the right view to spot and resolve issues fast.',
    technologies: [
      'TypeScript',
      'React',
      'Grafana',
      'Actyx',
      'Balena',
      'Docker'
    ]
  },
  {
    id: 'lighting-digitalization',
    title:
      'Digital Transformation of Production Information in Lighting Manufacturing',
    description:
      'Replaced manual production floor tracking in a lighting manufacturer with three tailored dashboards, an Android app, and a web application, giving every team real-time visibility into processing stations and enabling faster incident response.',
    technologies: ['TypeScript', 'React', 'Actyx', 'Balena', 'Docker']
  },
  {
    id: 'transit-maintenance',
    title: 'Public Transportation Maintenance Process Digitalization',
    description:
      'Replaced paper-based maintenance workflows for a public transit operator with a set of targeted applications for different employee groups, built on a decentralized architecture to stay resilient without a central point of failure.',
    technologies: ['TypeScript', 'React', 'Actyx', 'Docker']
  },
  {
    id: 'social-distancing',
    title: 'Social Distancing Compliance Application Using Camera Technology',
    description:
      'Built a camera-based social distancing monitor at the height of the COVID-19 pandemic. Uses perspective correction and environmental calibration to accurately measure real-world distances between people, with API alerts when thresholds are breached and no cloud required.',
    technologies: ['Python', 'TensorFlow', 'Computer Vision', 'IoT']
  },
  {
    id: 'blog-angular',
    title: 'Blog Development with WordPress Integration',
    description:
      'Rebuilt a personal blog on Angular while keeping full WordPress compatibility under the hood, preserving the existing content workflow and CMS capabilities without being locked into the default WordPress frontend.',
    technologies: ['TypeScript', 'Angular']
  }
]
