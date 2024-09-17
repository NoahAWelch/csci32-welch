import { getVariant, getVariantOutlineStyles, getVariantBorderStyles, getVariantTextStyles, Variants } from './variant'
import { getSizes, getInputSizesStyles, Sizes } from './size'
import { HTMLInputTypeAttribute } from 'react'
import { getCommons } from './tokens'

interface InputProps {
  placeholder?: string
  className?: string
  defaultValue?: any
  type?: HTMLInputTypeAttribute
  size?: Sizes
  variant?: Variants
  value?: any
  setValue?: (newValue: string) => void
  name: string
  id: string
}

export default function Input({
  placeholder,
  defaultValue,
  type = 'text',
  size = Sizes.Medium,
  variant = Variants.Primary,
  value,
  setValue,
  name,
  id,
}: InputProps) {
  const sizeClasses = getSizes(size)
  const sizeInputClasses = getInputSizesStyles(size)
  const variantClasses = getVariant(variant)
  const variantOutlineClasses = getVariantOutlineStyles(variant)
  const variantBorderClasses = getVariantBorderStyles(variant)
  const variantTextClasses = getVariantTextStyles(variant)
  const commonClasses = getCommons()
  return (
    <input
      placeholder={placeholder}
      className={`${sizeClasses} ${sizeInputClasses} ${variantClasses} ${variantTextClasses} ${variantBorderClasses} ${variantOutlineClasses} ${commonClasses}`}
      defaultValue={defaultValue}
      type={type}
      value={value}
      name={name}
      id={id}
      onChange={setValue ? (newValue) => setValue(newValue.currentTarget.value) : () => {}}
    />
  )
}
