import React from 'react'

import { GridSizeType } from '@/constants/styles/gridSize'

import ProgressBarStyled from './ProgressBar.style'

export type ProgressProps = React.PropsWithChildren<{
  maxNumber: string | number
  valueNumber: string | number
  width?: 'full' | 'fit'
  height?: keyof GridSizeType
  style?: React.CSSProperties
}>

export default function ProgressBar(props: ProgressProps) {
  return (
    <ProgressBarStyled
      max={props.maxNumber}
      value={props.valueNumber}
      {...props}
    />
  )
}
