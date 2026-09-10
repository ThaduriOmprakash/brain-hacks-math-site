import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import SEO from '../components/SEO.jsx'
import { categories, allTricks } from '../data/tricks.js'
import { posts } from '../data/blog.js'

const featured = allTricks.find((t) => t.slug === 'square-ending-in-5')

function CarouselControls({ onPrevious, onNext, canGoPrevious, canGoNext, label }) {
  const buttonClass =
    'grid h-10 w-10 place-items-center rounded-full border-2 border-pencil bg-paper transition-colors hover:bg-postit disabled:cursor-not-allowed disabled:opacity-35'

  return (
    <div className="flex gap-2" aria-label={`${label} navigation`}>
      <button
        type="button"
        className={buttonClass}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label={`Previous ${label}`}
        title={`Previous ${label}`}
      >
        <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label={`Next ${label}`}
        title={`Next ${label}`}
      >
        <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  )
}

function CardCarousel({ items, label, renderItem }) {
  const viewportRef = useRef(null)
  const [canGoPrevious, setCanGoPrevious] = useState(false)
  const [canGoNext, setCanGoNext] = useState(false)

  function updateControls() {
    const viewport = viewportRef.current
    if (!viewport) return
    setCanGoPrevious(viewport.scrollLeft > 2)
    setCanGoNext(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 2)
  }

  function move(direction) {
    viewportRef.current?.scrollBy({
      left: direction * (viewportRef.current.clientWidth * 0.9),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    updateControls()
    window.addEventListener('resize', updateControls)
    return () => window.removeEventListener('resize', updateControls)
  }, [])

  return (
    <>
      <div
        ref={viewportRef}
        onScroll={updateControls}
        className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none"
      >
        {items.map((item, index) => (
          <div key={item.slug ?? item.title} className="min-w-[86%] snap-start sm:min-w-[48%] md:min-w-0 md:flex-1">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-end">
        <CarouselControls
          label={label}
          onPrevious={() => move(-1)}
          onNext={() => move(1)}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <SEO
        title="Brain Hacks Math | Mental Math Tricks and Practice"
        description="Learn mental math shortcuts for multiplication, squares, percentages, and exam maths. Practice until the patterns become reflexes."
      />
      {/* Hero */}
      <section className="relative py-16 md:py-24 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <Badge className="mb-6">50+ tricks, zero calculator</Badge>
          <h1 className="text-5xl md:text-6xl -rotate-1">
            Maths, minus the calculator<span className="inline-block rotate-12 text-marker">!</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-pencil/80 max-w-[46ch]">
            Learn the mental shortcuts real fast-calculators use, practice them until they're
            reflexes, and watch two-digit multiplication stop being scary.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/tricks">Start with a trick</Button>
            <Button to="/quiz" variant="secondary">
              Try today's quiz
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Card rotate="rotate-2" tone="postit" className="w-64 ml-auto">
            <p className="font-heading text-3xl">23 × 42</p>
            <p className="mt-2 text-pencil/70">solved in under 4 seconds, no scratch paper</p>
          </Card>
          <span
            aria-hidden="true"
            className="absolute -left-6 top-1/2 h-16 w-16 rounded-full border-2 border-dashed border-ballpoint animate-bounce [animation-duration:3s]"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl rotate-1">Pick a series</h2>
        <p className="mt-2 text-pencil/70">
          Each series builds on the last — start with Multiplication if you're new.
        </p>
        <div className="mt-10">
          <CardCarousel
            items={categories}
            label="series"
            renderItem={(cat, i) => (
              <Link to={`/tricks#${cat.slug}`}>
                <Card
                  rotate={i % 2 === 0 ? '-rotate-1' : 'rotate-1'}
                  className="h-full hover:rotate-0 transition-transform duration-100"
                >
                  <span
                    aria-hidden="true"
                    className="grid place-items-center h-14 w-14 rounded-full border-2 border-pencil font-heading text-2xl"
                  >
                    {cat.icon}
                  </span>
                  <h3 className="mt-4 text-xl">{cat.title}</h3>
                  <p className="mt-2 text-sm text-pencil/70">{cat.tagline}</p>
                </Card>
              </Link>
            )}
          />
        </div>
      </section>

      {/* Featured trick */}
      {featured && (
        <section className="py-12 md:py-16">
          <Card decoration="tack" rotate="-rotate-1" className="md:p-10">
            <Badge tone="white" className="mb-4">
              Trick of the week
            </Badge>
            <h2 className="text-3xl md:text-4xl">{featured.title}</h2>
            <p className="mt-3 text-lg text-pencil/80">{featured.summary}</p>

            <div className="mt-6 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="border-2 border-dashed border-pencil/40 rounded-wobbly-sm p-4">
                <p className="text-sm text-pencil/60">Problem</p>
                <p className="font-heading text-2xl mt-1">{featured.example.problem}</p>
              </div>
              <span aria-hidden="true" className="justify-self-center font-heading text-2xl text-ballpoint">
                →
              </span>
              <div className="border-2 border-pencil rounded-wobbly-sm p-4 bg-postit">
                <p className="text-sm text-pencil/60">Answer</p>
                <p className="font-heading text-2xl mt-1">{featured.example.answer}</p>
              </div>
            </div>

            <Button
              to={`/tricks/${featured.categorySlug}/${featured.slug}`}
              variant="secondary"
              className="mt-6 h-10 px-4 text-base"
            >
              See the full steps
            </Button>
          </Card>
        </section>
      )}

      {/* Quiz teaser */}
      <section className="py-12 md:py-16">
        <Card tone="postit" rotate="rotate-1" className="text-center md:p-12">
          <h2 className="text-3xl md:text-4xl">Think you've got it? Prove it.</h2>
          <p className="mt-3 text-pencil/80 max-w-[50ch] mx-auto">
            A short, timed set of problems pulled straight from the tricks above. No pen and
            paper allowed.
          </p>
          <Button to="/quiz" className="mt-6">
            Take the quiz
          </Button>
        </Card>
      </section>

      {/* Blog preview */}
      <section className="py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl -rotate-1">From the notebook</h2>
          <Link
            to="/blog"
            className="hidden sm:inline text-pencil/70 underline decoration-wavy decoration-2 underline-offset-4 hover:text-marker"
          >
            All posts
          </Link>
        </div>
        <div className="mt-8">
          <CardCarousel
            items={posts}
            label="notebook posts"
            renderItem={(post) => (
              <Link to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-[6px_6px_0px_0px_#2d2d2d] transition-shadow duration-100">
                  <Badge tone="white" className="text-xs">
                    {post.tag}
                  </Badge>
                  <h3 className="mt-4 text-xl">{post.title}</h3>
                  <p className="mt-2 text-sm text-pencil/70">{post.excerpt}</p>
                </Card>
              </Link>
            )}
          />
        </div>
      </section>
    </div>
  )
}
