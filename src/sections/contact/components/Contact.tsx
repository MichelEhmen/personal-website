import { Mail, MapPin } from 'lucide-react'

const Contact = () => (
  <section id="contact" className="relative px-4 py-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Get In{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Let's Connect */}
        <div className="glass-card p-8">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-300">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you&apos;re looking
            to build something from scratch or need help improving an existing
            application, let&apos;s talk!
          </p>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-8">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Contact Information
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:michelehmen@gmail.com"
                  className="text-white transition-colors hover:text-purple-400"
                >
                  michelehmen@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Northern Germany</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-400">
        <p>© 2026 Michel Ehmen. Built with Next.js & Tailwind CSS</p>
      </div>
    </div>
  </section>
)

export default Contact
