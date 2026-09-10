import { NavLink } from 'react-router-dom'
import Button from './ui/Button.jsx'

const links = [
  { to: '/tricks', label: 'Tricks' },
  { to: '/blog', label: 'Blog' },
  { to: '/quiz', label: 'Quiz' },
]

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
      <NavLink to="/" className="flex shrink-0 items-center gap-3">
        <span
          className="grid place-items-center h-11 w-11 rotate-3 border-2 border-pencil rounded-wobbly-sm bg-postit font-heading text-xl"
          aria-hidden="true"
        >
          ∑
        </span>
        <span className="font-heading text-2xl">Brain Hacks Math</span>
      </NavLink>

      <nav className="flex shrink-0 items-center gap-4 md:gap-8 text-base md:text-lg">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `font-body underline decoration-wavy decoration-2 underline-offset-4 ${
                isActive ? 'decoration-marker text-marker' : 'decoration-transparent hover:decoration-pencil'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Button to="/quiz" variant="primary" className="h-10 px-4 text-base hidden sm:inline-flex">
        Practice now
      </Button>
    </header>
  )
}
