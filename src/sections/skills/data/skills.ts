import { Code2, Cpu, BarChart3, Cloud, Brain, Users } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export type SkillTag = {
  label: string
  children?: string[]
}

export type Skill = {
  icon: LucideIcon
  title: string
  gradient: string
  tags: SkillTag[]
}

export const SKILLS: Skill[] = [
  {
    icon: Code2,
    title: 'Frontend Development',
    gradient: 'from-purple-500 to-pink-500',
    tags: [
      { label: 'TypeScript' },
      { label: 'React', children: ['Next.js'] },
      { label: 'Angular' },
      { label: 'Svelte' },
      { label: 'Styling', children: ['Tailwind', 'SCSS'] }
    ]
  },
  {
    icon: Cpu,
    title: 'IoT & Edge Computing',
    gradient: 'from-blue-500 to-cyan-500',
    tags: [
      { label: 'Balena' },
      { label: 'Docker' },
      { label: 'Single-Board Computers' },
      { label: 'OTA Updates' }
    ]
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    gradient: 'from-green-500 to-teal-500',
    tags: [
      { label: 'Real-Time Dashboards' },
      { label: 'Grafana' },
      { label: 'KPI Systems' },
      { label: 'Data Aggregation' }
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & Backend',
    gradient: 'from-orange-500 to-red-500',
    tags: [
      { label: 'AWS' },
      { label: 'PostgreSQL' },
      { label: 'Docker' },
      { label: 'Node.js' }
    ]
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    gradient: 'from-pink-500 to-rose-500',
    tags: [
      { label: 'Python' },
      { label: 'TensorFlow' },
      { label: 'Computer Vision' }
    ]
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    gradient: 'from-yellow-500 to-orange-500',
    tags: [
      { label: 'Frontend Lead' },
      { label: 'Team Lead' },
      { label: 'Consulting' },
      { label: 'Architecture' }
    ]
  }
]
