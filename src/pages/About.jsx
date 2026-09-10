import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="About Brain Hacks Math | Mental Math Learning"
        description="Learn why Brain Hacks Math exists and how its mental math tricks, examples, and quizzes are designed for practical practice."
        path="/about"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">About Brain Hacks Math</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-pencil/90">
        <p>
          Brain Hacks Math is a learning site for people who want to become quicker and more
          confident with everyday calculations.
        </p>
        <p>
          Each lesson breaks a useful pattern into short steps, shows a worked example, and gives
          you a way to practise it. The goal is not to replace a calculator. It is to help you
          estimate, check your work, and recognise numbers more easily.
        </p>
        <p>
          Start with the <Link className="underline underline-offset-4" to="/tricks">math trick series</Link>,
          read the <Link className="underline underline-offset-4" to="/blog">notebook articles</Link>,
          or test yourself with the <Link className="underline underline-offset-4" to="/quiz">daily quiz</Link>.
        </p>
      </div>
    </div>
  )
}
