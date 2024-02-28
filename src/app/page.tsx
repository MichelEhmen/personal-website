import Navbar from '@/components/Navbar'
import About from '@/sections/about'
import Articles from '@/sections/articles'
import Home from '@/sections/home'
import Projects from '@/sections/projects'
import { NavbarItem } from '@/types/NavbarItem'

export default function App() {
  type Section = { label?: string; id?: string; component: JSX.Element }
  const sections: Section[] = [
    { id: 'home', component: <Home key="home" /> },
    {
      label: 'Articles',
      id: 'articles',
      component: <Articles key="articles" />
    },
    {
      label: 'Projects',
      id: 'projects',
      component: <Projects key="projects" />
    },
    { label: 'AboutMe', id: 'about', component: <About key="about" /> }
  ]
  return (
    <>
      <div className="container mx-auto my-4  px-4 sm:px-6 lg:px-20">
        <Navbar
          className="px-4"
          navbarItems={sections
            .map((section): { label?: string; id?: string } => ({
              label: section.label,
              id: section.id
            }))
            .filter(
              (navbarItem): navbarItem is NavbarItem => !!navbarItem.label
            )}
        />
      </div>
      <main className="container mx-auto flex flex-col gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-20">
        {sections.map((section) => section.component)}
      </main>
    </>
  )
}
