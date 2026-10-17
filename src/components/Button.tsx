import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'inverse'

const variants: Record<Variant, string> = {
  primary: 'bg-blue text-white hover:bg-[#0669b3]',
  secondary: 'bg-white text-navy ring-1 ring-inset ring-line hover:bg-ice',
  inverse: 'bg-white text-navy hover:bg-ice',
}

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-60'

function classes(variant: Variant, className: string) {
  return `${base} ${variants[variant]} ${className}`
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={classes(variant, className)} {...props}>
      {children}
    </button>
  )
}

type LinkButtonProps = LinkProps & {
  variant?: Variant
  children: ReactNode
}

export function LinkButton({ variant = 'primary', className = '', children, ...props }: LinkButtonProps) {
  return (
    <Link className={classes(variant, className)} {...props}>
      {children}
    </Link>
  )
}
