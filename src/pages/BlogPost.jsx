import { useParams, Link, Navigate } from 'react-router-dom'
import Badge from '../components/ui/Badge.jsx'
import { posts } from '../data/blog.js'
import SEO from '../components/SEO.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <SEO
        title={`${post.title} | Brain Hacks Math`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <Link to="/blog" className="text-pencil/70 underline decoration-wavy decoration-2 underline-offset-4">
        ← All posts
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <Badge tone="white" className="text-xs">
          {post.tag}
        </Badge>
        <time className="text-sm text-pencil/50">
          {new Date(post.date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </div>

      <h1 className="mt-4 text-4xl md:text-5xl -rotate-1">{post.title}</h1>

      <img
        src={post.image}
        alt={post.imageAlt}
        className="mt-8 h-64 md:h-80 w-full rounded-wobbly border-2 border-pencil/20 object-cover"
      />

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-pencil/90">
        {post.body.map((para, i) =>
          i === 0 ? (
            <p key={i}>
              <span className="float-left font-heading text-6xl leading-[0.8] pr-2 pt-1">
                {para[0]}
              </span>
              {para.slice(1)}
            </p>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </div>

      <aside className="mt-12 border-t-2 border-dashed border-pencil/30 pt-6">
        <h2 className="text-2xl">Keep learning</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {post.relatedLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-wobbly-sm border-2 border-pencil/60 px-4 py-3 underline decoration-transparent underline-offset-4 hover:decoration-pencil"
            >
              {link.label} -&gt;
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}
