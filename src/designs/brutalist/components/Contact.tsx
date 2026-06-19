const Contact = () => (
  <section id="contact" className="relative z-10 px-6 py-24 md:px-12">
    <div className="mx-auto max-w-6xl">
      <header className="mb-12">
        <div className="brut-prompt mb-2">{'$ ./contact.sh'}</div>
        <h2 className="text-4xl font-bold md:text-5xl">Get In Touch</h2>
      </header>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="brut-prompt mb-4">
            {'$ echo "let\'s build something"'}
          </div>
          <p className="max-w-md" style={{ color: 'rgba(245,245,240,0.8)' }}>
            Always open to interesting projects, deep-tech challenges, or a
            coffee chat about software engineering. Drop me a line.
          </p>
        </div>

        <dl className="space-y-4">
          <div>
            <dt className="brut-caps mb-1">email</dt>
            <dd>
              <a className="brut-link" href="mailto:michelehmen@gmail.com">
                [michelehmen@gmail.com]
              </a>
            </dd>
          </div>
          <div>
            <dt className="brut-caps mb-1">location</dt>
            <dd>Northern Germany — Niedersachsen, DE</dd>
          </div>
          <div>
            <dt className="brut-caps mb-1">status</dt>
            <dd>
              <span className="brut-status-dot" />
              available for work
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
)

export default Contact
