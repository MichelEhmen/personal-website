const NAV_ITEMS = [
  { label: 'hero', href: '#hero' },
  { label: 'skills', href: '#skills' },
  { label: 'work', href: '#projects' },
  { label: 'writing', href: '#articles' },
  { label: 'contact', href: '#contact' }
]

const Nav = () => (
  <nav className="brut-nav px-6 py-3 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
      <span className="brut-caps">michel@dev:~$</span>
      <ul className="flex flex-wrap gap-1 text-sm">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a className="brut-link" href={item.href}>
              [{item.label}]
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default Nav
