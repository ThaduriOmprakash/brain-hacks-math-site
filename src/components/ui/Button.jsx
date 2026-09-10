import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 border-[3px] border-pencil font-body ' +
  'transition-transform duration-100 h-12 px-6 select-none active:translate-x-1 active:translate-y-1 ' +
  'active:shadow-none'

const variants = {
  primary:
    'bg-white text-pencil shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-marker hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d2d]',
  secondary:
    'bg-erased text-pencil shadow-[4px_4px_0px_0px_#2d2d2d] hover:bg-ballpoint hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d2d]',
}

/**
 * Hand-drawn wobbly button. Renders a <Link> when `to` is given, else a <button>.
 */
const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', className = '', children, ...props },
  ref
) {
  const classes = `${base} ${variants[variant]} rounded-wobbly text-lg md:text-xl ${className}`

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
})

export default Button
