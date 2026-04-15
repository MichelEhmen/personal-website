import { Code2, Cpu, BarChart3, Cloud, Brain, Users } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export type Skill = {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export const SKILLS: Skill[] = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Angular, Svelte, Tailwind, SCSS',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cpu,
    title: 'IoT & Edge Computing',
    description: 'Balena, Docker, Single-Board Computers, OTA Updates',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description:
      'Real-Time Dashboards, Grafana, KPI Systems, Multi-Source Data Aggregation',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Cloud,
    title: 'Cloud & Backend',
    description: 'AWS, PostgreSQL, Docker, Node.js',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Python, TensorFlow, Computer Vision',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description: 'Frontend Lead, Team Lead, Software Consulting, Architecture',
    gradient: 'from-yellow-500 to-orange-500'
  }
]
