import './global.css'
import '@/designs/brutalist/styles.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono'
})

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${inter.className} ${jetbrainsMono.variable} h-full w-full bg-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
