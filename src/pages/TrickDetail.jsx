import { useParams, Link, Navigate } from 'react-router-dom'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import YouTubeVideo from '../components/YouTubeVideo.jsx'
import { findTrick, categories } from '../data/tricks.js'

export default function TrickDetail() {
  const { category, trick: trickSlug } = useParams()
  const trick = findTrick(category, trickSlug)
  const cat = categories.find((c) => c.slug === category)

  if (!trick || !cat) return <Navigate to="/tricks" replace />

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to={`/tricks#${cat.slug}`}
        className="text-pencil/70 underline decoration-wavy decoration-2 underline-offset-4"
      >
        ← Back to {cat.title}
      </Link>

      <h1 className="mt-6 text-4xl md:text-5xl -rotate-1">{trick.title}</h1>
      <p className="mt-3 text-lg text-pencil/80">{trick.summary}</p>

      <YouTubeVideo title={trick.title} videoId={trick.youtubeId} />

      <Card className="mt-10" decoration="tape">
        <h2 className="text-2xl">The steps</h2>
        <ol className="mt-4 space-y-4">
          {trick.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 grid place-items-center h-9 w-9 rounded-full border-2 border-pencil font-heading"
              >
                {i + 1}
              </span>
              <p className="pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card tone="postit" rotate="rotate-1" className="mt-8">
        <h2 className="text-2xl">Worked example</h2>
        <p className="mt-3 font-heading text-2xl">{trick.example.problem}</p>
        <p className="mt-2 text-pencil/80">{trick.example.working}</p>
        <p className="mt-3 text-3xl font-heading text-marker">= {trick.example.answer}</p>
      </Card>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button to="/quiz">Practice this in the quiz</Button>
        <Button to="/tricks" variant="secondary">
          More tricks
        </Button>
      </div>
    </div>
  )
}
