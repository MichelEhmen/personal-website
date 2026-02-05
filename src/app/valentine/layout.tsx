import './styles.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valentine',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

export default function ValentineLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full bg-gradient-to-br from-pink-400 via-red-300 to-rose-400">
        <div className="h-full w-full overflow-hidden">
          <div className="gradients-container-valentine">
            <div className="heart-gradient-1"></div>
            <div className="heart-gradient-2"></div>
            <div className="heart-gradient-3"></div>
          </div>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </>
  )
}
