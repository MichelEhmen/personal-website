'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Palette, Zap, Server } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express, REST APIs, Serverless Functions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Database & Storage',
      description: 'PostgreSQL, MongoDB, Redis',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Cloud Platforms',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Design Systems, Responsive Design',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Optimization, Web Vitals, SEO Best Practices',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card group p-6 transition-all"
            >
              <div
                className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.gradient} p-3 shadow-lg`}
              >
                <skill.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
