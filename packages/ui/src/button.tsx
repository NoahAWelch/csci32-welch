'use client'
import { getVariant, getVariantOutlineStyles, getVariantBorderStyles, getVariantTextStyles, Variants } from './variant'
import { getSizes, getInputSizesStyles, Sizes } from './size'
import { ReactNode } from 'react'
import { getCommons } from './tokens'

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
  const sizeClasses = getSizes(size)
  const sizeInputClasses = getInputSizesStyles(size)
  const variantClasses = getVariant(variant)
  const variantOutlineClasses = getVariantOutlineStyles(variant)
  const variantBorderClasses = getVariantBorderStyles(variant)
  const variantTextClasses = getVariantTextStyles(variant)

  const commonClasses = getCommons()
  const completeClasses = `${sizeClasses} ${sizeInputClasses} ${variantClasses} ${variantTextClasses} ${variantBorderClasses} ${variantOutlineClasses} ${commonClasses} ${className}`
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
