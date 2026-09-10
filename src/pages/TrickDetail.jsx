import { useParams, Link, Navigate } from 'react-router-dom'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import YouTubeVideo from '../components/YouTubeVideo.jsx'
import SEO from '../components/SEO.jsx'
import { findTrick, categories } from '../data/tricks.js'

export default function TrickDetail() {
  const { category, trick: trickSlug } = useParams()
  const trick = findTrick(category, trickSlug)
  const cat = categories.find((c) => c.slug === category)

  if (!trick || !cat) return <Navigate to="/tricks" replace />

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title={`${trick.title} | Brain Hacks Math`}
        description={`${trick.summary} Learn the method with worked examples and practice guidance.`}
        path={`/tricks/${cat.slug}/${trick.slug}`}
      />
      <Link
        to={`/tricks#${cat.slug}`}
        className="text-pencil/70 underline decoration-wavy decoration-2 underline-offset-4"
      >
        ← Back to {cat.title}
      </Link>

      <h1 className="mt-6 text-4xl md:text-5xl -rotate-1">{trick.title}</h1>
      <p className="mt-3 text-lg text-pencil/80">{trick.summary}</p>

      {trick.introduction && (
        <p className="mt-6 text-lg leading-relaxed text-pencil/90">{trick.introduction}</p>
      )}

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

      {trick.workedExamples && (
        <section className="mt-12">
          <h2 className="text-3xl">More worked examples</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {trick.workedExamples.map((workedExample) => (
              <Card key={workedExample.problem} className="h-full">
                <h3 className="text-xl">{workedExample.problem}</h3>
                <ol className="mt-4 space-y-2 text-pencil/80">
                  {workedExample.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 border-t-2 border-dashed border-pencil/30 pt-3 font-heading text-2xl text-marker">
                  = {workedExample.answer}
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {trick.extensions && (
        <section className="mt-12">
          <h2 className="text-3xl">Taking the pattern further</h2>
          <div className="mt-5 space-y-5">
            {trick.extensions.map((extension) => (
              <div key={extension.title}>
                <h3 className="text-xl">{extension.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-pencil/85">{extension.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {trick.commonMistakes && (
        <Card className="mt-12" decoration="tape">
          <h2 className="text-2xl">Common mistakes to watch for</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-lg text-pencil/85">
            {trick.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </Card>
      )}

      {trick.faqs && (
        <section className="mt-12">
          <h2 className="text-3xl">Questions about multiplying by 11</h2>
          <div className="mt-5 space-y-3">
            {trick.faqs.map((faq) => (
              <details key={faq.question} className="rounded-wobbly-sm border-2 border-pencil/50 bg-white px-5 py-4">
                <summary className="cursor-pointer font-heading text-xl">{faq.question}</summary>
                <p className="mt-3 text-lg leading-relaxed text-pencil/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 flex flex-wrap gap-4">
        <Button to="/quiz">Practice this in the quiz</Button>
        <Button to="/tricks" variant="secondary">
          More tricks
        </Button>
      </div>
    </div>
  )
}
