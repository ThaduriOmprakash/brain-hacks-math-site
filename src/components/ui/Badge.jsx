export default function Badge({ children, className = '', tone = 'postit' }) {
  const toneClass = tone === 'postit' ? 'bg-postit' : 'bg-white'
  return (
    <span
      className={`inline-block border-2 border-pencil rounded-wobbly-sm px-3 py-1 text-sm md:text-base font-body -rotate-1 ${toneClass} ${className}`}
    >
      {children}
    </span>
  )
}
