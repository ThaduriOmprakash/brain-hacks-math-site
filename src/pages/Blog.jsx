import { Link } from 'react-router-dom'
import Card from '../components/ui/Card.jsx'
import Badge from '../components/ui/Badge.jsx'
import { posts } from '../data/blog.js'
import SEO from '../components/SEO.jsx'

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="Mental Math Articles and Practice Advice | Brain Hacks Math"
        description="Read practical articles about mental math, calculation shortcuts, and building a daily practice habit."
        path="/blog"
      />
      <h1 className="text-4xl md:text-5xl -rotate-1">From the notebook</h1>
      <p className="mt-3 text-lg text-pencil/70">
        Notes on mental math, practice habits, and the tricks behind the tricks.
      </p>

      <div className="mt-12 space-y-6">
        {posts.map((post, i) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card rotate={i % 2 === 0 ? '-rotate-1' : 'rotate-1'}>
              <img
                src={post.image}
                alt={post.imageAlt}
                loading="lazy"
                className="h-48 w-full rounded-wobbly-sm object-cover border-2 border-pencil/20"
              />
              <div className="flex items-center gap-3">
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
              <h2 className="mt-3 text-2xl">{post.title}</h2>
              <p className="mt-2 text-pencil/70">{post.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
