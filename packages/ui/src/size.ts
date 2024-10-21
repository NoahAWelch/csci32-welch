export enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XSMALL = 'XSMALL',
}

export function getSizes(size: Sizes) {
  switch (size) {
    case Sizes.Small:
      return ' rounded-md shadow-lg'
    case Sizes.Medium:
      return ' rounded-lg shadow-xl'
    case Sizes.Large:
      return ' rounded-xl shadow-2xl'
    case Sizes.XSMALL:
      return 'px-2 py-0.5 rounded shadow'
  }
}
export function getInputSizesStyles(size: Sizes) {
  switch (size) {
    case Sizes.XSMALL:
      return 'px-1 py-0.5 rounded shadow'
    case Sizes.Small:
      return 'px-2 py-1 rounded-md shadow-lg'
    case Sizes.Medium:
      return 'px-4 py-1.5 rounded-lg shadow-xl'
    case Sizes.Large:
      return 'px-8 py-2 rounded-xl shadow-2xl'
  }
}
