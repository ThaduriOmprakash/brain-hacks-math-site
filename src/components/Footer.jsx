import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Multiplication Mastery', to: '/tricks#multiplication' },
      { label: 'Squares & Cubes', to: '/tricks#squares-cubes' },
      { label: 'Fast Arithmetic', to: '/tricks#fast-arithmetic' },
    ],
  },
  {
    title: 'Practice',
    links: [
      { label: 'Daily quiz', to: '/quiz' },
      { label: 'Exam maths', to: '/tricks#exam-maths' },
    ],
  },
  {
    title: 'Read',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-16 mt-12 border-t-2 border-dashed border-pencil/40">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <span className="font-heading text-2xl">Brain Hacks Math</span>
          <p className="mt-3 text-pencil/70 max-w-[24ch] leading-relaxed">
            MATH MADE EASY
            <br />
            TRICKS THAT STICK
            <br />
            SKILLS FOR LIFE
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-lg underline decoration-wavy decoration-marker underline-offset-4">
              {col.title}
            </h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-pencil/80 underline decoration-transparent underline-offset-4 hover:decoration-pencil"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-pencil/60">
        <Link to="/privacy" className="underline decoration-transparent underline-offset-4 hover:decoration-pencil">
          Privacy Policy
        </Link>
        <Link to="/terms" className="underline decoration-transparent underline-offset-4 hover:decoration-pencil">
          Terms of Use
        </Link>
      </div>
      <p className="mt-12 text-center text-sm text-pencil/50">
        © {new Date().getFullYear()} Brain Hacks Math. Made with 🖤
      </p>
    </footer>
  )
}
