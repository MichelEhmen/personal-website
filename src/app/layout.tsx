import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michel Ehmen',
  description: 'Personal Website of Michel'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${inter.className} h-full w-full bg-gradient-to-br from-sand to-amber-200 text-slate-100`}
      >
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="left-4 top-0 h-96 w-96 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-2000 right-4 top-0 h-96 w-96 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-4000 left-20 top-8 h-96 w-96 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        </div>
        <div className="opacity-100">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
