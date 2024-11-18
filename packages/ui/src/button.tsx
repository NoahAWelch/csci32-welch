/*'use client'
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
}*/
'use client'
import { getCommons } from './tokens'
import { ReactNode } from 'react'
import { getInputSizesStyles, Sizes } from './size'
import {
  Variants,
  getVariant,
  getVariantButtonTextStyles,
  getVariantOutlineStyles,
  getVariantBorderStyles,
} from './variant'
import { getCommonButtonStyles } from './tokens'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | 'disabled'
  size?: Sizes
  variant?: Variants
}

export const Button = ({
  children,
  className,
  href,
  type = 'button',
  onClick,
  size = Sizes.Medium,
  variant = Variants.Primary,
}: ButtonProps) => {
  const sizeCssClasses = getInputSizesStyles(size)
  const variantButtonTextCssClasses = getVariantButtonTextStyles(variant)
  const variantBackgroundCssClasses = getVariant(variant)
  const variantBorderClasses = getVariantBorderStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const commonCssClasses = getCommonButtonStyles()

  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundCssClasses}  ${variantOutlineCssClasses} ${commonCssClasses} ${variantButtonTextCssClasses} ${variantBorderClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button type={type} className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
