import Navbar from '@/components/Navbar'
import About from '@/sections/about'
import Articles from '@/sections/articles'
import Home from '@/sections/home'
import Projects from '@/sections/projects'

export default function App() {
  return (
    <>
      <div className="container mx-auto my-4  px-4 sm:px-6 lg:px-20">
        <Navbar className="px-4" />
      </div>
      <main className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:px-20">
        <Home />
        <Articles />
        <Projects />
        <About />
      </main>
    </>
  )
}
