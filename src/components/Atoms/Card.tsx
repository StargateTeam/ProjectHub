import React from 'react'

import CardStyled from './Card.style'

export type CardProps = React.PropsWithChildren<{
  rounded?: 'none' | 'small' | 'normal' | 'full'
  shadow?: boolean
  className?: string
  style?: React.CSSProperties
}>

const Card = (props: CardProps) => {
  return (
    <>
      <CardStyled {...props}>{props.children}</CardStyled>
    </>
  )
}

export default Card
