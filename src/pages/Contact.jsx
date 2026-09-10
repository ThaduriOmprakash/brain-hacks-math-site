import SEO from '../components/SEO.jsx'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <SEO
        title="Contact Brain Hacks Math"
        description="Contact Brain Hacks Math with questions, corrections, suggestions, or feedback about the mental math lessons."
        path="/contact"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">Contact</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-pencil/90">
        <p>
          Found an error, have a question about a trick, or want to suggest a topic? We would like
          to hear from you.
        </p>
        <p>
          Email <a className="underline underline-offset-4" href="mailto:hello@brainhacksmath.com">hello@brainhacksmath.com</a> and
          include the page URL when your message is about a specific lesson.
        </p>
        <p className="text-base text-pencil/70">
          We aim to reply to genuine questions and corrections as soon as possible.
        </p>
      </div>
    </div>
  )
}
