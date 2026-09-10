import SEO from '../components/SEO.jsx'

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="Terms of Use | Brain Hacks Math"
        description="Read the terms for using Brain Hacks Math lessons, articles, and practice tools."
        path="/terms"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">Terms of Use</h1>
      <p className="mt-3 text-pencil/60">Last updated: September 10, 2026</p>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-pencil/90">
        <section>
          <h2 className="text-2xl">Educational content</h2>
          <p className="mt-2">Brain Hacks Math provides general educational information and practice activities. Check important calculations independently and use professional advice where a decision requires it.</p>
        </section>
        <section>
          <h2 className="text-2xl">Acceptable use</h2>
          <p className="mt-2">You may use the site for personal, educational, and non-commercial purposes. Do not misuse the site, interfere with its operation, or copy and republish its content as your own.</p>
        </section>
        <section>
          <h2 className="text-2xl">Content accuracy</h2>
          <p className="mt-2">We work to keep examples and explanations accurate, but mistakes can happen. Please contact us when you find an error so we can review it.</p>
        </section>
        <section>
          <h2 className="text-2xl">Changes</h2>
          <p className="mt-2">We may update the site and these terms as the project grows. Continued use of the site after an update means you accept the revised terms.</p>
        </section>
      </div>
    </div>
  )
}
