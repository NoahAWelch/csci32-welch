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

import { ReactNode } from 'react'
import { getSizeStyles, Size } from './size'
import { getVariantBackgroundStyles, getVariantButtonTextStyles, getVariantOutlineStyles, Variant } from './variant'
import { getCommonButtonStyles } from './tokens'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  type = 'button',
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  const sizeCssClasses = getSizeStyles(size)
  const variantButtonTextCssClasses = getVariantButtonTextStyles(variant)
  const variantBackgroundCssClasses = getVariantBackgroundStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const commonCssClasses = getCommonButtonStyles()

  const completedCssClasses = `${sizeCssClasses} ${variantBackgroundCssClasses}  ${variantOutlineCssClasses} ${commonCssClasses} ${variantButtonTextCssClasses} ${className}`
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
