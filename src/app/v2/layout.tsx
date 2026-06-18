import './styles.css'
import { JetBrains_Mono } from 'next/font/google'
import { Metadata } from 'next'

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Michel Ehmen — v2',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

const V2Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={`brut-root ${jetbrainsMono.variable}`}>{children}</div>
)

export default V2Layout
