'use client'
import { Variants } from './variant'
import { Sizes } from './size'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  size?: Sizes
  variant?: Variants
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Sizes.Medium,
  variant = Variants.Primary,
}: ButtonProps) => {
  let sizeClasses = ''
  switch (size) {
    case Sizes.Small:
      sizeClasses = 'px-2 py-2 rounded-md shadow-lg'
      break
    case Sizes.Medium:
      sizeClasses = 'px-4 py-4 rounded-lg shadow-xl'
      break
    case Sizes.Large:
      sizeClasses = 'px-8 py-8 rounded-xl shadow-2xl'
      break
  }
  let variantClasses = ''
  switch (variant) {
    case Variants.Primary:
      variantClasses = 'bg-blue-600 outline-red-600 hover:bg-blue-800 active:bg-blue-900'
      break
    case Variants.Secondary:
      variantClasses = 'bg-green-600 outline-yellow-500 hover:bg-green-800 active:bg-green-900'
      break
    case Variants.Tertiary:
      variantClasses = 'bg-red-600 outline-blue-600 hover:bg-red-800 active:bg-red-900'
      break
  }
  const commonClasses = 'flex items-center justify-center focus:outline outline-offset-2 text-white transition-colors'
  const completeClasses = `${sizeClasses} ${variantClasses} ${commonClasses} ${className}`
  return href ? (
    <a href={href} className={completeClasses}>
      {children}
    </a>
  ) : (
    <button className={completeClasses} onClick={onClick}>
      {children}
    </button>
  )
}
