import classNames from 'classnames'
import { Variants, getVariantButtonTextStyles, getVariant } from './variant'
import { getCommonButtonStyles } from './tokens'
import { getInputSizesStyles, Sizes } from './size'

export type TagProps = {
  children: React.ReactNode
  onClickX?: () => void
  className?: string
  variant?: Variants
}

export function Tag({ children, className = '', variant = Variants.Primary, onClickX }: TagProps) {
  const tagBackgroundStyles = getVariant(variant)
  const tagTextStyles = getVariantButtonTextStyles(variant)
  const tagButtonStyles = getCommonButtonStyles()
  const tagSizeStyles = getInputSizesStyles(Sizes.XSMALL)
  return (
    <div
      className={classNames(
        'flex items-center',
        tagBackgroundStyles,
        tagTextStyles,
        tagButtonStyles,
        tagSizeStyles,
        className,
      )}
    >
      <span>{children}</span>
      {onClickX && (
        <button onClick={onClickX} className="ml-2 text-lg hover:scale-105 transition-transform">
          &times;
        </button>
      )}
    </div>
  )
}
