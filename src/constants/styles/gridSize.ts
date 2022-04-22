const size = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '28px'
}

const remSize = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem'
}

const relativeSize = {
  full: '100%',
  half: '50%'
}

const gridSize = {
  ...size,
  ...remSize,
  ...relativeSize
}

export default gridSize

export type GridSizeType = typeof gridSize
