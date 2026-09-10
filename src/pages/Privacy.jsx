import SEO from '../components/SEO.jsx'

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="Privacy Policy | Brain Hacks Math"
        description="Read the Brain Hacks Math privacy policy and learn how information may be handled when you use the site."
        path="/privacy"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">Privacy Policy</h1>
      <p className="mt-3 text-pencil/60">Last updated: September 10, 2026</p>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-pencil/90">
        <section>
          <h2 className="text-2xl">Information we collect</h2>
          <p className="mt-2">Brain Hacks Math does not require an account to read lessons or use the quiz. If you contact us, we receive the information you choose to include in your message, such as your email address and question.</p>
        </section>
        <section>
          <h2 className="text-2xl">Usage information</h2>
          <p className="mt-2">The site may use hosting logs, privacy-respecting analytics, or advertising services in the future. Those services may process technical information such as device type, browser, approximate location, and pages visited. Any analytics or advertising tools added to the live site should be listed here and configured according to their policies.</p>
        </section>
        <section>
          <h2 className="text-2xl">Cookies</h2>
          <p className="mt-2">Third-party services, including advertising providers, may use cookies or similar technologies. You can manage cookies through your browser settings. Where required, the site will request consent before using non-essential cookies.</p>
        </section>
        <section>
          <h2 className="text-2xl">Contact</h2>
          <p className="mt-2">For privacy questions, contact hello@brainhacksmath.com. This policy should be updated whenever the site adds analytics, advertising, forms, email subscriptions, or other data collection.</p>
        </section>
      </div>
    </div>
  )
}
