import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <SEO title="Page Not Found | Brain Hacks Math" description="The page you requested could not be found." path="/404" />
      <p className="font-heading text-6xl">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">That page wandered off.</h1>
      <p className="mt-4 text-lg text-pencil/70">Try a mental math trick, read the notebook, or head back home.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button to="/">Back home</Button>
        <Link className="inline-flex items-center underline underline-offset-4" to="/tricks">Browse tricks</Link>
      </div>
    </div>
  )
}
