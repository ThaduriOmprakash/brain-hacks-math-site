import { Link } from 'react-router-dom'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import SEO from '../components/SEO.jsx'
import { categories } from '../data/tricks.js'

export default function Tricks() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SEO
        title="Mental Math Tricks by Series | Brain Hacks Math"
        description="Browse mental math tricks for multiplication, squares and cubes, fast arithmetic, and exam maths."
        path="/tricks"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">All the tricks, by series</h1>
      <p className="mt-3 text-lg text-pencil/70 max-w-[55ch]">
        Work through a series in order, or jump straight to whatever you need for tomorrow's
        exam.
      </p>

      <div className="mt-14 space-y-16">
        {categories.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-8">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid place-items-center h-11 w-11 rounded-full border-2 border-pencil font-heading text-xl"
              >
                {cat.icon}
              </span>
              <h2 className="text-2xl md:text-3xl">{cat.title}</h2>
            </div>
            <p className="mt-1 text-pencil/70 ml-14">{cat.tagline}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {cat.tricks.map((trick, i) => (
                <Link key={trick.slug} to={`/tricks/${cat.slug}/${trick.slug}`}>
                  <Card
                    rotate={i % 2 === 0 ? '-rotate-1' : 'rotate-1'}
                    className="h-full hover:rotate-0 transition-transform duration-100"
                  >
                    <h3 className="text-lg">{trick.title}</h3>
                    <p className="mt-2 text-sm text-pencil/70">{trick.summary}</p>
                    <Badge tone="white" className="mt-4 text-xs">
                      {trick.example.problem} = {trick.example.answer}
                    </Badge>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
