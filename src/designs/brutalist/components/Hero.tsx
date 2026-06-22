import Image from 'next/image'
import { PROFILE } from '../data/profile'

const Hero = () => (
  <section
    id="hero"
    className="relative z-10 flex flex-col px-6 py-12 md:px-12"
    style={{
      // Fill the viewport below the sticky nav. --brut-nav-h is set on
      // .brut-root by Nav via ResizeObserver. 100svh (small viewport) is
      // friendlier on mobile than 100vh because it accounts for the URL bar.
      minHeight: 'calc(100svh - var(--brut-nav-h, 0px))'
    }}
  >
    <div className="mx-auto my-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
      {/* Left column — use vertical rhythm via flex+gap instead of per-element mb-* */}
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="brut-prompt">michel@dev:~$ whoami</div>

        {/* Mobile: small image + name side-by-side. Hidden on md+ where
            the large figure in the right column takes over. */}
        <div className="flex items-center gap-6 md:hidden">
          <div className="brut-card brut-tilt relative h-20 w-20 flex-shrink-0 overflow-hidden">
            <Image
              src={PROFILE.profileImage}
              alt={PROFILE.name}
              fill
              sizes="80px"
              className="object-cover"
              style={{ filter: 'grayscale(1) contrast(1.1)' }}
              priority
            />
          </div>
          <h1
            className="font-bold leading-[0.95]"
            style={{ fontSize: 'clamp(2.25rem, 11vw, 3.5rem)' }}
          >
            {PROFILE.name}
          </h1>
        </div>

        {/* Desktop: full-width name without inline image */}
        <h1
          className="hidden font-bold leading-[0.95] md:block"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          {PROFILE.name}
        </h1>

        <div>
          <div
            className="mb-6 h-[2px] w-24"
            style={{ background: 'var(--brut-accent)' }}
          />
          <p className="brut-caps mb-2">{PROFILE.title}</p>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: 'rgba(245,245,240,0.8)' }}
          >
            {PROFILE.bio}
          </p>
        </div>

        <nav className="flex flex-wrap gap-1">
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
          className="brut-button inline-block self-start px-5 py-3 text-base font-medium"
        >
          {'>_ view my work'}
        </a>

        <div className="brut-caps hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex">
          <span>
            <span className="brut-status-dot" />
            available for work
          </span>
        </div>
      </div>

      {/* Right column: large portrait — desktop only, mobile uses the
          inline mini-image next to the name above */}
      <figure className="hidden w-full max-w-sm flex-col gap-3 md:flex md:w-80">
        <div className="brut-card brut-tilt relative aspect-square overflow-hidden">
          <Image
            src={PROFILE.profileImage}
            alt={PROFILE.name}
            fill
            sizes="320px"
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
