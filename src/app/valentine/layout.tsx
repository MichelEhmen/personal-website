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
      <div className="fixed left-0 top-0 h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900">
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
