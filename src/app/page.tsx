import Navbar from '@/app/_components/Navbar'
import About from '@/features/about'
import Articles from '@/features/articles'
import Home from '@/features/home'
import Projects from '@/features/projects'

export default function App() {
  return (
    <>
      <div className="container mx-auto my-4  px-4 sm:px-6 lg:px-20">
        <Navbar className="px-4" />
      </div>
      <main className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-20">
        <Home />
        <About />
        <Projects />
        <Articles />
      </main>
    </>
  )
}
