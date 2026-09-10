import { useMemo, useState } from 'react'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SEO from '../components/SEO.jsx'

const TOTAL_QUESTIONS = 8

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generators = [
  () => {
    const n = randInt(10, 90)
    return { prompt: `${n} × 11`, answer: n * 11, hint: 'Split the digits, drop their sum in the middle.' }
  },
  () => {
    const n = randInt(1, 9) * 10 + 5
    return { prompt: `${n}²`, answer: n * n, hint: 'Ends in 25 — the front is n × (n+1).' }
  },
  () => {
    const n = randInt(10, 80) * 2
    return { prompt: `${n} × 25`, answer: n * 25, hint: 'Multiply by 100, then divide by 4.' }
  },
  () => {
    const base = randInt(2, 20) * 10
    const pct = [10, 20, 5, 25, 50][randInt(0, 4)]
    return { prompt: `${pct}% of ${base}`, answer: (base * pct) / 100, hint: 'Find 10% first, then scale it.' }
  },
  () => {
    const anchor = randInt(3, 9) * 10
    const diff = randInt(1, 3)
    const n = anchor - diff
    return { prompt: `${n}²`, answer: n * n, hint: `Anchor on ${anchor}² and adjust.` }
  },
]

function makeQuestion() {
  const gen = generators[randInt(0, generators.length - 1)]
  return gen()
}

export default function Quiz() {
  const [questions] = useState(() => Array.from({ length: TOTAL_QUESTIONS }, makeQuestion))
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle') // idle | correct | wrong
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const current = questions[index]
  const done = index >= TOTAL_QUESTIONS

  const handleCheck = (e) => {
    e.preventDefault()
    if (status !== 'idle') return
    const correct = Number(input) === current.answer
    setStatus(correct ? 'correct' : 'wrong')
    if (correct) setScore((s) => s + 1)
  }

  const handleNext = () => {
    setIndex((i) => i + 1)
    setInput('')
    setStatus('idle')
    setShowHint(false)
  }

  const handleRestart = () => {
    window.location.reload()
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <SEO
        title="Daily Mental Math Quiz | Brain Hacks Math"
        description="Test your mental math skills with a short quiz covering multiplication, squares, percentages, and calculation shortcuts."
        path="/quiz"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">Today's quiz</h1>
      <p className="mt-3 text-lg text-pencil/70">
        {done ? 'Here\'s how it went.' : `Question ${index + 1} of ${TOTAL_QUESTIONS} — no calculator.`}
      </p>

      {!done && (
        <Card className="mt-10" decoration="tack" rotate="-rotate-1">
          <p className="font-heading text-4xl md:text-5xl text-center py-6">{current.prompt}</p>

          <form onSubmit={handleCheck} className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="number"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={status !== 'idle'}
              placeholder="Your answer"
              autoFocus
              className="w-full sm:flex-1 h-12 px-4 border-2 border-pencil rounded-wobbly-sm bg-white font-body text-xl
                placeholder:text-pencil/40 focus:outline-none focus:border-ballpoint focus:ring-2 focus:ring-ballpoint/20"
            />
            {status === 'idle' ? (
              <Button type="submit" className="h-12 px-6 shrink-0">
                Check
              </Button>
            ) : (
              <Button type="button" onClick={handleNext} variant="secondary" className="h-12 px-6 shrink-0">
                {index + 1 === TOTAL_QUESTIONS ? 'See score' : 'Next'}
              </Button>
            )}
          </form>

          {status === 'correct' && (
            <p className="mt-4 text-lg text-center text-ballpoint">Correct — that's it.</p>
          )}
          {status === 'wrong' && (
            <p className="mt-4 text-lg text-center text-marker">
              Not quite — it's {current.answer}.
            </p>
          )}

          {status === 'idle' && (
            <button
              type="button"
              onClick={() => setShowHint((h) => !h)}
              className="mt-4 text-sm text-pencil/60 underline decoration-dashed underline-offset-4 block mx-auto"
            >
              {showHint ? current.hint : 'Need a hint?'}
            </button>
          )}
        </Card>
      )}

      {done && (
        <Card tone="postit" rotate="rotate-1" className="mt-10 text-center">
          <p className="text-pencil/70">You scored</p>
          <p className="font-heading text-6xl mt-2">
            {score}/{TOTAL_QUESTIONS}
          </p>
          <p className="mt-4 text-pencil/80">
            {score === TOTAL_QUESTIONS
              ? 'Clean sweep — go pick a harder series.'
              : score >= TOTAL_QUESTIONS / 2
              ? 'Solid. A few more rounds and these become reflexes.'
              : 'Worth a revisit — go through the trick steps once more, then try again.'}
          </p>
          <Button onClick={handleRestart} className="mt-6">
            Try another set
          </Button>
        </Card>
      )}

      <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full border-2 border-pencil ${
              i < index || (i === index && status !== 'idle') ? 'bg-pencil' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
