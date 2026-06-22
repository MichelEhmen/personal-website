const Footer = () => (
  <footer className="brut-footer relative z-10 px-6 py-10 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
      <div className="brut-caps">
        {'// © '}
        {new Date().getFullYear()} michel ehmen — built with next.js
      </div>
      <div className="brut-caps">
        <span>{'EOF'}</span>
      </div>
    </div>
  </footer>
)

export default Footer
