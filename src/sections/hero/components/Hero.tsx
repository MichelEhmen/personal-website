import { Github, Linkedin, Mail, Code } from 'lucide-react'
import Image from 'next/image'

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center justify-center px-4 pb-20 pt-28 md:py-20"
  >
    <div className="glass-card mx-auto max-w-6xl p-8 md:p-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-64 md:w-64">
            <Image
              src="/images/profile.png"
              alt="Michel Ehmen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Michel Ehmen
            </span>
          </h1>

          <p className="mb-2 text-2xl font-semibold text-gray-300 md:text-3xl">
            Full-Stack Developer
          </p>

          <p className="mb-6 max-w-2xl text-base text-gray-400 md:text-lg">
            Passionate about React, TypeScript, and building exceptional web
            experiences. From simple websites to complex factory applications, I
            love creating solutions that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              href="https://github.com/michelehmen"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-purple-400"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/michel-ehmen/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:michelehmen@gmail.com"
              className="glass-button flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-pink-400"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#projects"
              className="glass-button inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3"
            >
              <Code size={20} />
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
