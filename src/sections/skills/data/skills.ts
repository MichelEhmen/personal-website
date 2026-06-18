import { Code2, TestTube, Server, Cloud, Sparkles, Users } from 'lucide-react'
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
      { label: 'React', children: ['Next.js', 'React Native'] },
      { label: 'Angular' },
      { label: 'Svelte' },
      { label: 'State', children: ['Zustand', 'Redux', 'MobX'] },
      { label: 'Styling', children: ['Tailwind', 'SCSS'] }
    ]
  },
  {
    icon: TestTube,
    title: 'Testing & Architecture',
    gradient: 'from-green-500 to-teal-500',
    tags: [
      { label: 'Jest' },
      { label: 'Vitest' },
      { label: 'Playwright' },
      { label: 'Frontend Architecture' }
    ]
  },
  {
    icon: Server,
    title: 'Backend',
    gradient: 'from-orange-500 to-red-500',
    tags: [
      { label: 'Node.js' },
      { label: 'Python' },
      { label: 'REST APIs' },
      { label: 'InfluxDB' },
      { label: 'Event-Driven' }
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    gradient: 'from-blue-500 to-cyan-500',
    tags: [
      { label: 'AWS' },
      { label: 'Docker' },
      { label: 'CI/CD' },
      { label: 'Monitoring' },
      { label: 'Cloud Architecture' }
    ]
  },
  {
    icon: Sparkles,
    title: 'AI-Augmented Development',
    gradient: 'from-pink-500 to-rose-500',
    tags: [
      { label: 'Claude Code' },
      { label: 'ONNX' },
      { label: 'Computer Vision' },
      { label: 'TensorFlow' }
    ]
  },
  {
    icon: Users,
    title: 'Leadership',
    gradient: 'from-yellow-500 to-orange-500',
    tags: [
      { label: 'Technical Leadership' },
      { label: 'Mentoring' },
      { label: 'Stakeholder Management' },
      { label: 'Requirements Engineering' }
    ]
  }
]
