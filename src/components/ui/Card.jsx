const Tape = () => (
  <span
    aria-hidden="true"
    className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-2 bg-pencil/10 border border-pencil/20"
  />
)

const Tack = () => (
  <span
    aria-hidden="true"
    className="absolute -top-2.5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-marker border-2 border-pencil"
  />
)

/**
 * decoration: 'tape' | 'tack' | undefined
 * tone: 'white' | 'postit'
 */
export default function Card({
  children,
  decoration,
  tone = 'white',
  rotate = '',
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const toneClass = tone === 'postit' ? 'bg-postit' : 'bg-white'

  return (
    <Tag
      className={`relative border-2 border-pencil rounded-wobbly-md p-6 ${toneClass} ${rotate} shadow-[3px_3px_0px_0px_rgba(45,45,45,0.15)] ${className}`}
      {...props}
    >
      {decoration === 'tape' && <Tape />}
      {decoration === 'tack' && <Tack />}
      {children}
    </Tag>
  )
}
