'use client'
import { useState } from 'react'
import Button from '@/components/Button'
import classNames from 'classnames'

type NavbarProps = {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarItems = ['AboutMe', 'Projects', 'Articles']

  return (
    <nav
      className={classNames(
        className,
        `relative flex items-center justify-between gap-4 ${
          isMenuOpen ? 'rounded-t-lg' : 'rounded-lg'
        } bg-secondary px-4 py-1 text-rock`
      )}
    >
      <a href="#" className="flex flex-col text-xl font-bold">
        <div>Michel</div>
        <div>
          Ehmen<span className="text-primary">.dev</span>
        </div>
      </a>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Navbar-Elemente */}
      <div
        className={`absolute left-0 top-16 flex w-full flex-col gap-2 rounded-b-lg  bg-secondary p-4 transition-all duration-300 ease-in-out md:relative md:left-auto md:top-0 md:w-auto md:flex-row md:gap-4 md:p-0 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        {navbarItems.map((navbarItem, idx) => (
          <a
            href="#"
            key={idx}
            className="rounded-md p-2 text-black hover:bg-gray-100"
          >
            {navbarItem}
          </a>
        ))}
        <Button className="mt-2 md:mt-0">Contact Me</Button>
      </div>

      {/* Inhalte für die Desktop-Ansicht */}
      {/* <div className="hidden gap-4 md:flex"> */}
      {/*   {navbarItems.map((navbarItem, idx) => ( */}
      {/*     <a */}
      {/*       href="#" */}
      {/*       key={idx} */}
      {/*       className="rounded-md p-2 text-black hover:bg-gray-100" */}
      {/*     > */}
      {/*       {navbarItem} */}
      {/*     </a> */}
      {/*   ))} */}
      {/*   <Button>Contact Me</Button> */}
      {/* </div> */}
    </nav>
  )
}

export default Navbar
