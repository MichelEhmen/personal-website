import Image from 'next/image'
import { PROFILE } from '../data/profile'

const Hero = () => (
  <section
    id="hero"
    className="relative z-10 flex min-h-screen flex-col px-6 py-12 md:px-12"
  >
    <div className="mx-auto my-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
      {/* Left column */}
      <div>
        <div className="brut-prompt mb-4">michel@dev:~$ whoami</div>

        <h1
          className="mb-6 font-bold leading-[0.95]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          {PROFILE.name}
        </h1>

        <div
          className="my-6 h-[2px] w-24"
          style={{ background: 'var(--brut-accent)' }}
        />

        <p className="brut-caps mb-2">{PROFILE.title}</p>

        <p
          className="mb-8 max-w-2xl text-base leading-relaxed"
          style={{ color: 'rgba(245,245,240,0.8)' }}
        >
          {PROFILE.bio}
        </p>

        <nav className="mb-8 flex flex-wrap gap-1">
          {PROFILE.links.map((link) => (
            <a
              key={link.label}
              className="brut-link"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              [{link.label}]
            </a>
          ))}
        </nav>

        <a
          href="#projects"
          className="brut-button inline-block px-5 py-3 text-base font-medium"
        >
          {'>_ view my work'}
        </a>

        <div className="brut-caps mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>
            <span className="brut-status-dot" />
            available for work
          </span>
          <span>{'// Niedersachsen, DE'}</span>
          <span>{'// uptime: 5y 11mo'}</span>
        </div>
      </div>

      {/* Right column */}
      <figure className="flex w-full max-w-sm flex-col gap-3 md:w-80">
        <div className="brut-card brut-tilt relative aspect-square overflow-hidden">
          <Image
            src={PROFILE.profileImage}
            alt={PROFILE.name}
            fill
            className="object-cover"
            style={{ filter: 'grayscale(1) contrast(1.1)' }}
            priority
          />
        </div>
        <figcaption className="brut-caps">
          {'// staring directly into your soul since 2019'}
        </figcaption>
      </figure>
    </div>

    <div className="brut-caps text-center">— end of file —</div>
  </section>
)

export default Hero
