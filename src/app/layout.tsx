import './global.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://www.michel-ehmen.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Michel Ehmen | Full-Stack Developer',
    template: '%s | Michel Ehmen'
  },
  description:
    'Full-Stack Developer from Northern Germany, passionate about React, TypeScript, and building exceptional web experiences — from simple websites to complex factory applications.',
  keywords: [
    'Michel Ehmen',
    'Full-Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'IoT',
    'Edge Computing',
    'IT Consultant',
    'Web Developer',
    'Northern Germany'
  ],
  authors: [{ name: 'Michel Ehmen', url: SITE_URL }],
  creator: 'Michel Ehmen',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Michel Ehmen | Full-Stack Developer',
    description:
      'Full-Stack Developer from Northern Germany, passionate about React, TypeScript, and building exceptional web experiences.',
    siteName: 'Michel Ehmen',
    images: [
      {
        url: '/images/profile.png',
        width: 800,
        height: 800,
        alt: 'Michel Ehmen'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Michel Ehmen | Full-Stack Developer',
    description:
      'Full-Stack Developer from Northern Germany, passionate about React, TypeScript, and building exceptional web experiences.',
    images: ['/images/profile.png']
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const interBubble = document.querySelector<HTMLDivElement>('.interactive')!
//   let curX = 0
//   let curY = 0
//   let tgX = 0
//   let tgY = 0
//
//   function move() {
//     curX += (tgX - curX) / 20
//     curY += (tgY - curY) / 20
//     interBubble.style.transform = `translate(${Math.round(
//       curX
//     )}px, ${Math.round(curY)}px)`
//     requestAnimationFrame(() => {
//       move()
//     })
//   }
//
//   window.addEventListener('mousemove', (event) => {
//     tgX = event.clientX
//     tgY = event.clientY
//   })
//
//   move()
// })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full bg-slate-900`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
