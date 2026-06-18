import Link from 'next/link'

const Footer = () => (
  <footer className="brut-footer relative z-10 px-6 py-10 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
      <div className="brut-caps">
        {'// © '}
        {new Date().getFullYear()} michel ehmen — built with next.js + too much
        coffee
      </div>
      <div className="brut-caps flex flex-wrap gap-x-4 gap-y-1">
        <a
          className="brut-link"
          href="https://github.com/MichelEhmen/personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          [source]
        </a>
        <Link className="brut-link" href="/">
          [v1]
        </Link>
        <span>{'EOF'}</span>
      </div>
    </div>
  </footer>
)

export default Footer
