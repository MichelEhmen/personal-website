import Button from '@/components/Button'
import classNames from 'classnames'

type NavbarProps = {
  className?: string
}
const Navbar = ({ className }: NavbarProps) => {
  const navbarItems = ['AboutMe', 'Projects', 'Articles']

  return (
    <div
      className={classNames(
        className,
        'flex items-center justify-between gap-4 rounded-lg bg-secondary py-1 text-black'
      )}
    >
      <a href="#" className="flex flex-col text-xl font-bold">
        <div>Michel</div>
        <div>
          Ehmen<span className="text-primary">.dev</span>
        </div>
      </a>
      <div className="flex gap-4">
        {navbarItems.map((navbarItem, idx) => (
          <a href="#" key={idx}>
            {navbarItem}
          </a>
        ))}
      </div>
      <Button>Contact Me</Button>
    </div>
  )
}
export default Navbar
