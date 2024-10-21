export enum Variants {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
  TertiaryReview = 'TertiaryReview',
  ALERT = 'ALERT',
  ERROR = 'ERROR',
}

export function getVariant(variant: Variants) {
  switch (variant) {
    case Variants.Primary:
      return 'bg-blue-600 hover:bg-blue-800 active:bg-blue-900'
    case Variants.Secondary:
      return 'bg-green-600 hover:bg-green-800 active:bg-green-900'
    case Variants.Tertiary:
      return 'bg-red-600 hover:bg-red-800 active:bg-red-900'
    case Variants.TertiaryReview:
      return 'bg-purple-600 hover:bg-purple-800 active:bg-purple-900'
    case Variants.ERROR:
      return 'bg-red-600 hover:bg-red-700 active:bg-red-800'
    case Variants.ALERT:
      return 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800'
  }
}
export function getVariantOutlineStyles(variant: Variants) {
  switch (variant) {
    case Variants.Primary:
      return 'outline-red-600'
    case Variants.Secondary:
      return 'outline-yellow-500'
    case Variants.Tertiary:
      return 'outline-blue-600'
    case Variants.TertiaryReview:
      return 'outline-pink-600'
    case Variants.ERROR:
      return 'outline-red-600'
    case Variants.ALERT:
      return 'outline-amber-600'
  }
}
export function getVariantBorderStyles(variant: Variants) {
  switch (variant) {
    case Variants.Primary:
      return ' border-2 border-yellow-600'
    case Variants.Secondary:
      return 'border-2 border-blue-500'
    case Variants.Tertiary:
      return 'border-2 border-green-600'
    case Variants.TertiaryReview:
      return 'border-2 border-gray-600'
    case Variants.ERROR:
      return 'border-2 border-red-600'
    case Variants.ALERT:
      return 'border-2 border-amber-600'
  }
}
export function getVariantTextStyles(variant: Variants) {
  switch (variant) {
    case Variants.Primary:
      return 'text-black font-bold'
    case Variants.Secondary:
      return 'text-black font-bold '
    case Variants.Tertiary:
      return 'text-black font-bold'
    case Variants.TertiaryReview:
      return 'text-black font-bold'
    case Variants.ERROR:
      return 'text-black'
    case Variants.ALERT:
      return 'text-black'
  }

  export function getVariantButtonTextStyles(variant: Variants) {
    switch (variant) {
      case Variants.Primary:
        return 'text-white font-bold'
      case Variants.Secondary:
        return 'text-white font-bold '
      case Variants.Tertiary:
        return 'text-white font-bold'
      case Variants.TertiaryReview:
        return 'text-white font-bold'
      case Variants.ERROR:
        return 'text-white'
      case Variants.ALERT:
        return 'text-white'
    }

}
