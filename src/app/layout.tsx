import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michel Ehmen',
  description: 'Personal Website of Michel'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 `}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
