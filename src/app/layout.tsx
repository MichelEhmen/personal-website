import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michel Ehmen',
  description: 'Personal Website of Michel'
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
      <body
        className={`${inter.className} h-full w-full bg-gradient-to-br from-sand to-amber-200 text-slate-100`}
      >
        {/* <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center"> */}
        {/*   <div className="left-4 top-0 h-96 w-96 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div> */}
        {/*   <div className="animation-delay-2000 right-4 top-0 h-96 w-96 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div> */}
        {/*   <div className="animation-delay-4000 left-20 top-8 h-96 w-96 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div> */}
        {/* </div> */}
        <div className="gradient-bg fixed left-0 top-0 h-full w-full">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
        <div className="opacity-100">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
